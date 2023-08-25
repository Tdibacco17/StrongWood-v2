import { PaymentMethodInterface } from '@/types';
import styles from './ContactComponent.module.scss'
import Image from 'next/image';
import { useContext } from 'react';
import { ProductDetailContext } from '@/context/ProductDetailProvider';
import { ProductsDataContextInterface } from '@/types/products';

export default function ContactComponent({
    handleSubmit,
    handlePaymentChange,
    nameRef,
    phoneRef,
    emailRef,
    directionRef,
    noteRef,
    handleChangeNoteRef,
    selectRef,
    paymentMethod,
    selectedPayment,
    isSelect,
    loadingText,
    errorMessage,
    handleChangeIsNote,
    isNote
}: {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handlePaymentChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    nameRef: React.RefObject<HTMLInputElement>,
    phoneRef: React.RefObject<HTMLInputElement>,
    emailRef: React.RefObject<HTMLInputElement>,
    directionRef: React.RefObject<HTMLInputElement>,
    noteRef: string,
    handleChangeNoteRef: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
    selectRef: React.RefObject<HTMLSelectElement>,
    paymentMethod: PaymentMethodInterface,
    selectedPayment: string,
    isSelect: boolean,
    loadingText: boolean,
    errorMessage: string,
    handleChangeIsNote: () => void,
    isNote: boolean
}) {
    const { productData } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface;

    return (
        <div>
            {/* MODAL */}
            <div>
                {/* {productData && <Image
                    src={productData.image.imgSrc}
                    alt={productData.image.imgAlt}
                    placeholder='blur'
                    blurDataURL={productData.image.imgBlur}
                    priority
                    fill
                    sizes='(max-width: 992px) 50vw, (max-width: 442px) 33vw, 40vw'
                    className={styles['container-inner-image-product-detail']}
                />} */}
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        <p>Nombre</p>
                        <input
                            required
                            type="text"
                            name="name"
                            ref={nameRef} />
                    </label>
                    <label>
                        <p>Telefono</p>
                        <input
                            required
                            type="text"
                            name="name"
                            ref={phoneRef} />
                    </label>
                    <label>
                        <p>Email</p>
                        <input
                            required
                            type="email"
                            name="email"
                            ref={emailRef} />
                    </label>
                    <label>
                        <p>Dirección</p>
                        <input
                            required
                            type="text"
                            name="direction"
                            ref={directionRef} />
                    </label>
                </div>
                <div>
                    <label>
                        {
                            !isSelect ?
                                <p>
                                    Abonar en {paymentMethod ? paymentMethod : ""}
                                </p>
                                : <p>
                                    Abonar en {selectedPayment}
                                </p>
                        }
                        <select
                            value={selectedPayment}
                            onChange={handlePaymentChange}
                            ref={selectRef}>
                            <option value="">
                                Seleccionar metodo de pago
                            </option>
                            <option value="tarjeta">
                                Tarjeta
                            </option>
                            <option value="efectivo">
                                Efectivo
                            </option>
                        </select>
                    </label>
                    <button
                        disabled={noteRef.trim().length > 0}
                        onClick={handleChangeIsNote}
                        type="button">
                        Agregar nota
                    </button>
                </div>
                <button disabled={loadingText} type='submit' aria-label='Enviar mensaje de contacto'>
                    {loadingText ? "Cargando.." : "Enviar"}
                </button>
                <p>Nos pondremos en contacto dentro de las proximias 72hs</p>
                {errorMessage && <p>{errorMessage}</p>}
                {isNote && <label>
                    <p>Nota</p>
                    <textarea
                        placeholder="Agregar nota.."
                        onChange={handleChangeNoteRef} />
                </label>}
            </form>
        </div>
    )
}