'use client'
import ContactComponent from "@/components/ContactComponent/ContactComponent";
import { ProductDetailContext } from "@/context/ProductDetailProvider";
import { ProductsDataContextInterface } from "@/types/products";
import { useContext, useRef, useState } from "react";

export default function ContactContainer({ pago }: { pago?: string | undefined }) {
    const { productData } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface;

    const [selectedPayment, setSelectedPayment] = useState<string>(pago ?? "");
    console.log("[SELECTED]: ", selectedPayment)


    const [isSelect, setIsSelect] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>("");

    const selectRef = useRef<HTMLSelectElement | null>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const directionRef = useRef<HTMLInputElement>(null);
    const noteRef = useRef<HTMLTextAreaElement | null>(null);

    const handlePaymentChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        if (event.target.value === "efectivo" || event.target.value === "tarjeta") {
            setIsSelect(true);
        } else {
            setIsSelect(false);
        }
        setSelectedPayment(event.target.value);
    };

    const handleValidation = () => {
        const regex = /^[0-9]+$/;

        if (
            nameRef.current?.value.trim() === "" ||
            phoneRef.current?.value.trim() === "" ||
            emailRef.current?.value.trim() === "" ||
            directionRef.current?.value.trim() === ""
        ) {
            setErrorMessage("Por favor, complete todos los campos.");
            return false;
        }

        if (phoneRef.current?.value && !(regex.test(phoneRef.current?.value.trim()))) {
            setErrorMessage("Numero de telefono tiene que ser solo caracteres numericos.");
            return false;
        }

        if (phoneRef.current?.value && !(phoneRef.current?.value.length >= 8)) {
            setErrorMessage("El número de teléfono no cumple con la longitud mínima.");
            return false;
        }

        if ((selectedPayment === "") || selectedPayment && (selectedPayment !== "efectivo" && selectedPayment !== "tarjeta")) {
            setErrorMessage("Por favor, seleccione un método de pago.");
            return false;
        }

        return true;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!handleValidation()) {
            setTimeout(() => {
                setErrorMessage("")
            }, 4000)
            return;
        }

        let messageData = {
            name: nameRef.current?.value.trim(),
            phone: phoneRef.current?.value.trim(),
            email: emailRef.current?.value.trim(),
            direction: directionRef.current?.value.trim(),
            note: noteRef.current?.value.trim(),
            product: productData?.title,
            paymentMethod: selectedPayment,
            price: selectedPayment === "efectivo" ?
                productData?.details.payment.cash.offerPrice
                : productData?.details.payment.card.offerPrice
        }

        try {
            const response = await fetch("api/contact/products", {
                method: "POST",
                headers: {
                    "Accept": "application/json, text/plain",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(messageData)
            })
            const parseResponse = await response.json()

            if (parseResponse.status === 200) {
                alert("Email enviado correctamente!")
                setErrorMessage("")
                setTimeout(() => {

                }, 2500)
                return
            }
            return
        } catch (error) {
            console.log("Error al enviar el correo electrónico:", error);
        }
    }

    return <ContactComponent
        nameRef={nameRef}
        phoneRef={phoneRef}
        emailRef={emailRef}
        directionRef={directionRef}
        noteRef={noteRef}
        selectRef={selectRef}
        selectedPayment={selectedPayment}
        isSelect={isSelect}
        errorMessage={errorMessage}
        handleSubmit={handleSubmit}
        handlePaymentChange={handlePaymentChange}
    />
}