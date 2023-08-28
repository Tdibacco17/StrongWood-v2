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
        <div className={styles['container-section-product-contact']}>
            <div className={styles['container-wrapper-card-contact-vertical']}>
                {/* MODAL */}
                <div className={styles['container-wrapper-card-contact']}>
                    <div className={styles['container-outer-image-product-contact']}>
                        {productData && <Image
                            src={productData.image.imgSrc}
                            alt={productData.image.imgAlt}
                            placeholder='blur'
                            blurDataURL={productData.image.imgBlur}
                            priority
                            fill
                            sizes='(max-width: 992px) 50vw, (max-width: 442px) 33vw, 40vw'
                            className={styles['container-inner-image-product-contact']}
                        />}
                        </div>
                    <form onSubmit={handleSubmit} className={styles['container-section-form']}>
                        <div className={styles['wrapper-input']}>
                            <label className={styles['wrapper-label']}>
                                <p className={styles['text-custom']}>Nombre</p>
                                <input
                                    className={styles['input-custom']}
                                    required
                                    type="text"
                                    name="name"
                                    placeholder='Ej: Nombre'
                                    ref={nameRef} />
                            </label>
                            <label className={styles['wrapper-label']}>
                                <p className={styles['text-custom']}>Teléfono</p>
                                <input
                                    className={styles['input-custom']}
                                    required
                                    type="text"
                                    name="name"
                                    placeholder='Ej: +54911...'
                                    ref={phoneRef} />
                            </label>
                        </div>
                        <div className={styles['wrapper-input']}>
                            <label className={styles['wrapper-label']}>
                                <p className={styles['text-custom']}>Email</p>
                                <input
                                    className={styles['input-custom']}
                                    required
                                    type="email"
                                    name="email"
                                    placeholder='Ej: email@email.com'
                                    ref={emailRef} />
                            </label>
                            <label className={styles['wrapper-label']}>
                                <p className={styles['text-custom']}>Dirección</p>
                                <input
                                    className={styles['input-custom']}
                                    required
                                    type="text"
                                    name="direction"
                                    placeholder='Ej: Calle 123 piso A'
                                    ref={directionRef} />
                            </label>
                        </div>
                        <div className={styles['wrapper-input']}>
                            <label className={styles['wrapper-label']}>
                                {
                                    !isSelect ?
                                        <p className={styles['text-custom']}>
                                            Abonar en {paymentMethod ? paymentMethod : ""}
                                        </p>
                                        : <p className={styles['text-custom']}>
                                            Abonar en {selectedPayment}
                                        </p>
                                }
                                <select
                                    className={styles['select-custom']}
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
                                className={styles['btn-custom']}
                                disabled={noteRef.trim().length > 0}
                                onClick={handleChangeIsNote}
                                type="button">
                                Agregar nota
                            </button>
                        </div>
                        <button
                            className={styles['btn-send-custom']}
                            disabled={loadingText}
                            type='submit'
                            aria-label='Enviar mensaje de contacto'>
                            {loadingText ? "Cargando.." : "Enviar"}
                        </button>
                        {errorMessage && <p>{errorMessage}</p>}
                        <p className={styles['text-note-custom']}>Nos pondremos en contacto dentro de las proximias 72hs</p>
                    </form>
                </div>

                {isNote && <label className={styles['wrapper-note']}>
                    <p className={styles['text-custom']}>Nota</p>
                    <textarea
                        className={styles['text-area-custom']}
                        placeholder="Ej: Que falto detallar?"
                        onChange={handleChangeNoteRef} />
                </label>}
            </div>
        </div>
    )
}