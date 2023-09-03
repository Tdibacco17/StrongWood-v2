'use client'
import ContactComponent from "@/components/ContactComponent/ContactComponent";
import { MessageContactDataInterface } from "@/types";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function ContactContainer() {
    const router = useRouter()

    const [loadingText, setLoadingText] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
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
        const regex = /^[0-9]+$/;

        if (
            nameRef.current?.value.trim() === "" ||
            phoneRef.current?.value.trim() === "" ||
            emailRef.current?.value.trim() === "" ||
            directionRef.current?.value.trim() === "" ||
            locationRef.current?.value.trim() === "" ||
            noteRef.trim() === ""
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

        let messageData: MessageContactDataInterface = {
            name: nameRef.current?.value.trim() || "No se paso un nombre",
            phone: phoneRef.current?.value.trim() || "No se paso un teléfono",
            email: emailRef.current?.value.trim() || "No se paso un email",
            direction: directionRef.current?.value.trim() || "No se paso una dirección",
            location: locationRef.current?.value.trim() || "No se paso una localidad",
            note: noteRef.trim().length > 0 ? noteRef.trim() : "No se paso una nota",
        }
        try {
            const response = await fetch("/api/contact", {
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
    return <ContactComponent
        nameRef={nameRef}
        phoneRef={phoneRef}
        emailRef={emailRef}
        directionRef={directionRef}
        locationRef={locationRef}
        handleChangeNoteRef={handleChangeNoteRef}
        loadingText={loadingText}
        errorMessage={errorMessage}
        handleSubmit={handleSubmit}
    />
}