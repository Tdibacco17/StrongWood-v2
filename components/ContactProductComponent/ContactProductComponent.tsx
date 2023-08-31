import { ContactProductProps } from '@/types';
import styles from './ContactProductComponent.module.scss'
import Image from 'next/image';
import { useContext } from 'react';
import { ProductDetailContext } from '@/context/ProductDetailProvider';
import { ProductsDataContextInterface } from '@/types/products';
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import FieldToCompleteComponent from '../FieldToCompleteComponent/FieldToCompleteComponent';
import data from '@/models/es.json'

export default function ContactProductComponent({
    handleSubmit,
    handlePaymentChange,
    nameRef,
    phoneRef,
    emailRef,
    directionRef,
    locationRef,
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
}: ContactProductProps) {
    const { productData } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface;

    return (
        <div className={styles['container-section-product-contact']}>
            <div className={styles['container-wrapper-card-contact-vertical']}>
                {/* MODAL */}
                <div className={styles['container-wrapper-card-contact']}>
                    <div className={styles['container-outer-image-product-contact']}>
                        {productData ?
                            <Image
                                src={productData.image.imgSrc}
                                alt={productData.image.imgAlt}
                                placeholder='blur'
                                blurDataURL={productData.image.imgBlur}
                                priority
                                fill
                                sizes='(max-width: 992px) 50vw, (max-width: 442px) 33vw, 40vw'
                                className={styles['container-inner-image-product-contact']}
                            />
                            : <LoadingComponent />
                        }
                    </div>
                    <form onSubmit={handleSubmit} className={styles['container-section-form']}>
                        <div className={styles['wrapper-field-complete']}>
                            <FieldToCompleteComponent isTextAreaField={false} isSelectField={false} fieldProps={data.contact.fields.name} valueRef={nameRef} />
                            <FieldToCompleteComponent isTextAreaField={false} isSelectField={false} fieldProps={data.contact.fields.phone} valueRef={phoneRef} />
                        </div>
                        <div className={styles['wrapper-field-complete']}>
                            <FieldToCompleteComponent isTextAreaField={false} isSelectField={false} fieldProps={data.contact.fields.email} valueRef={emailRef} />
                            <FieldToCompleteComponent isTextAreaField={false} isSelectField={false} fieldProps={data.contact.fields.direction} valueRef={directionRef} />
                        </div>
                        <div className={styles['wrapper-field-complete']}>
                            <FieldToCompleteComponent isTextAreaField={false} isSelectField={false} fieldProps={data.contact.fields.location} valueRef={locationRef} />
                            <FieldToCompleteComponent isTextAreaField={false} isSelectField={true} selectProps={data.contact.fields.select.options} handlePaymentChange={handlePaymentChange} selectRef={selectRef} selectedPayment={selectedPayment} />
                        </div>
                        <div className={styles['wrapper-field-complete']}>
                            <button className={styles['btn-custom']}
                                disabled={noteRef.trim().length > 0}
                                onClick={handleChangeIsNote}
                                type="button"
                                aria-label={data.contact.buttons.addNote.ariaLabel}>
                                {data.contact.buttons.addNote.text}
                            </button>
                            <button className={styles['btn-send-custom']}
                                type='submit'
                                disabled={loadingText}
                                aria-label={data.contact.buttons.submit.ariaLabel}>
                                {loadingText ? data.contact.buttons.submit.loading : data.contact.buttons.submit.text}
                            </button>
                        </div>
                        <p className={styles['text-note-custom']}>{data.contact.info}</p>
                    </form>
                </div>
                {errorMessage && <p className={styles['text-error-custom']}>{errorMessage}</p>}
                {isNote &&
                    <FieldToCompleteComponent isTextAreaField={true} isSelectField={false} fieldProps={data.contact.fields.textarea} handleChangeNoteRef={handleChangeNoteRef} />}
            </div>
        </div>
    )
}