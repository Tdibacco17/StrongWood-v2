import styles from './ContactComponent.module.scss'

export default function ContactComponent({
    handleSubmit,
    handlePaymentChange,
    nameRef,
    phoneRef,
    emailRef,
    directionRef,
    noteRef,
    selectRef,
    selectedPayment,
    isSelect,
    errorMessage
}: {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handlePaymentChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    nameRef: React.RefObject<HTMLInputElement>,
    phoneRef: React.RefObject<HTMLInputElement>,
    emailRef: React.RefObject<HTMLInputElement>,
    directionRef: React.RefObject<HTMLInputElement>,
    noteRef: React.RefObject<HTMLTextAreaElement>,
    selectRef: React.RefObject<HTMLSelectElement>,
    selectedPayment: string,
    isSelect: boolean,
    errorMessage: string
}) {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button type='submit' aria-label='Enviar mensaje de contacto'>
                    enviar
                </button>
            </form>
        </div>
    )
}