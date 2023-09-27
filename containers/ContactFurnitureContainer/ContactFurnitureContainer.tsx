'use client'
import ContactFurnitureComponent from "@/components/ContactFurnitureComponent/ContactFurnitureComponent";
import { FurnitureDetailContext } from "@/context/FurnitureDetailProvider";
import { MessageContactFurnitureDataInterface, PaymentMethodInterface } from "@/types";
import { FurnitureDataContextInterface } from "@/types/design";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";

export default function ContactFurnitureContainer({ params }: { params: { slug: string } }) {
    const { contactData } = useContext(
        FurnitureDetailContext
    ) as FurnitureDataContextInterface

    const router = useRouter()

    useEffect(() => {
        if (!contactData) {
            router.push(`/cocinas/${params.slug}`)
        }
    }, [params.slug]);

    const [selectedPayment, setSelectedPayment] = useState<string>("");
    const [isSelect, setIsSelect] = useState<boolean>(false)
    const [loadingText, setLoadingText] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [isNote, setIsNote] = useState<boolean>(false);
    const handlePaymentChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        if (event.target.value === "efectivo" || event.target.value === "tarjeta" || event.target.value === "") {
            setIsSelect(true);
            setSelectedPayment(event.target.value);
        } else {
            setIsSelect(false);
            setSelectedPayment(event.target.value);
        }
    };

    const handleChangeIsNote = () => {
        setIsNote(!isNote);
    }

    const selectRef = useRef<HTMLSelectElement | null>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const directionRef = useRef<HTMLInputElement>(null);
    const locationRef = useRef<HTMLInputElement>(null);
    const [noteRef, setNoteRef] = useState<string>("");
    const handleChangeNoteRef = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.target.value;
        setNoteRef(text);
    };

    const handleValidation = () => {
        // const regex = /^\+[0-9]+$/;
        const regex = /^[0-9]+$/;

        if (
            nameRef.current?.value.trim() === "" ||
            phoneRef.current?.value.trim() === "" ||
            emailRef.current?.value.trim() === "" ||
            directionRef.current?.value.trim() === "" ||
            locationRef.current?.value.trim() === ""
        ) {
            setErrorMessage("Por favor, complete todos los campos");
            return false;
        }

        if (phoneRef.current?.value && !(phoneRef.current?.value.length >= 8)) {
            setErrorMessage("El número de teléfono no cumple con la longitud mínima");
            return false;
        }

        if (phoneRef.current?.value && !(regex.test(phoneRef.current?.value.trim()))) {
            setErrorMessage("Numero de telefono tiene que ser solo caracteres numericos");
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

        let messageData: MessageContactFurnitureDataInterface = {
            name: nameRef.current?.value.trim() || "No se paso un nombre",
            phone: phoneRef.current?.value.trim() || "No se paso un teléfono",
            email: emailRef.current?.value.trim() || "No se paso un email",
            direction: directionRef.current?.value.trim() || "No se paso una dirección",
            location: locationRef.current?.value.trim() || "No se paso una localidad",
            note: noteRef.trim().length > 0 ? noteRef.trim() : "No se paso una nota",
            paymentMethod: selectedPayment || "No se paso un metodo de pago",
            measures: contactData.measureValues,
            clickedImages: contactData.clickedImages
        }
        try {
            const response = await fetch("/api/contact/furniture", {
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
                setTimeout(() => {
                    setLoadingText(false);
                    router.push("/");
                }, 1500)
                return
            }
            return
        } catch (error) {
            console.log("Error al enviar el correo electrónico:", error);
        }
    }

    return <ContactFurnitureComponent
        nameRef={nameRef}
        phoneRef={phoneRef}
        emailRef={emailRef}
        directionRef={directionRef}
        locationRef={locationRef}
        noteRef={noteRef}
        handleChangeNoteRef={handleChangeNoteRef}
        selectRef={selectRef}
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