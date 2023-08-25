'use client'
import ContactComponent from "@/components/ContactComponent/ContactComponent";
import { ProductDetailContext } from "@/context/ProductDetailProvider";
import { ProductsDataContextInterface } from "@/types/products";
import { productsData } from '@/models/products'
import { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactContainer({
    params
}: {
    params: { slug: string }
}) {
    const { handleProductDataChange, productData, paymentMethod } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface;

    const router= useRouter()

    useEffect(() => {
        if (!productData) {
            if (params.slug) {
                handleProductDataChange(productsData[params.slug]);
            }
        }
    }, [params.slug]);

    const [selectedPayment, setSelectedPayment] = useState<string>(paymentMethod ?? "");
    const [isSelect, setIsSelect] = useState<boolean>(false)
    const [loadingText, setLoadingText] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [isNote, setIsNote] = useState<boolean>(false);

    const handlePaymentChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        if (event.target.value === "efectivo" || event.target.value === "tarjeta") {
            setIsSelect(true);
        } else {
            setIsSelect(false);
        }
        setSelectedPayment(event.target.value);
    };

    const handleChangeIsNote = () => {
        setIsNote(!isNote);
    }

    const selectRef = useRef<HTMLSelectElement | null>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const directionRef = useRef<HTMLInputElement>(null);
    const [noteRef, setNoteRef] = useState<string>("");
    const handleChangeNoteRef = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.target.value;
        setNoteRef(text);
    };

    const handleValidation = () => {
        const regex = /^[0-9]+$/;

        if (
            nameRef.current?.value.trim() === "" ||
            phoneRef.current?.value.trim() === "" ||
            emailRef.current?.value.trim() === "" ||
            directionRef.current?.value.trim() === ""
        ) {
            setErrorMessage("Por favor, complete todos los campos");
            return false;
        }

        if (phoneRef.current?.value && !(regex.test(phoneRef.current?.value.trim()))) {
            setErrorMessage("Numero de telefono tiene que ser solo caracteres numericos");
            return false;
        }

        if (phoneRef.current?.value && !(phoneRef.current?.value.length >= 8)) {
            setErrorMessage("El número de teléfono no cumple con la longitud mínima");
            return false;
        }

        if ((selectedPayment === "") || selectedPayment && (selectedPayment !== "efectivo" && selectedPayment !== "tarjeta")) {
            setErrorMessage("Por favor, seleccione un método de pago");
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
        setLoadingText(true);

        if (productData) {
            let messageData = {
                name: nameRef.current?.value.trim(),
                phone: phoneRef.current?.value.trim(),
                email: emailRef.current?.value.trim(),
                direction: directionRef.current?.value.trim(),
                note: noteRef.trim().length > 0 ? noteRef.trim() : "No se paso una nota",
                product: productData?.title,
                paymentMethod: selectedPayment,
                price: selectedPayment === "efectivo" ?
                    productData?.details.payment.cash.offerPrice
                    : productData?.details.payment.card.offerPrice
            }
            try {
                const response = await fetch("/api/contact/products", {
                    method: "POST",
                    headers: {
                        "Accept": "application/json, text/plain",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ messageData })
                })
                const parseResponse = await response.json()

                if (parseResponse.status === 200) {
                    alert("Email enviado correctamente")
                    setErrorMessage("")
                    // setIsModal(true);
                    // setIsCheck(true)
                    setTimeout(() => {
                        setLoadingText(false);
                        // setIsModal(false);
                        router.push("/");
                    }, 2500)
                    return
                }
                return
            } catch (error) {
                console.log("Error al enviar el correo electrónico:", error);
            }
        }
        //designData
    }

    return <ContactComponent
        nameRef={nameRef}
        phoneRef={phoneRef}
        emailRef={emailRef}
        directionRef={directionRef}
        noteRef={noteRef}
        handleChangeNoteRef={handleChangeNoteRef}
        selectRef={selectRef}
        paymentMethod={paymentMethod}
        selectedPayment={selectedPayment}
        isSelect={isSelect}
        loadingText={loadingText}
        errorMessage={errorMessage}
        handleSubmit={handleSubmit}
        handlePaymentChange={handlePaymentChange}
        handleChangeIsNote={handleChangeIsNote}
        isNote={isNote}
    />
}