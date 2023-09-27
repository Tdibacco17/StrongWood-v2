import { ContactFurnitureProps } from "@/types";
import FieldToCompleteComponent from "../FieldToCompleteComponent/FieldToCompleteComponent";
import styles from './ContactFurnitureComponent.module.scss'
import data from '@/models/es.json'

export default function ContactFurnitureComponent({
    handleSubmit,
    nameRef,
    phoneRef,
    emailRef,
    directionRef,
    locationRef,
    noteRef,
    handleChangeNoteRef,
    selectRef,
    selectedPayment,
    isSelect,
    loadingText,
    errorMessage,
    handleChangeIsNote,
    isNote,
    handlePaymentChange
}: ContactFurnitureProps) {
    return (
        <div className={styles['container-section-furniture-contact']}>
            {/* MODAL */}
            <div className={styles['container-wrapper-card-contact']}>
                <form onSubmit={handleSubmit} className={styles['container-section-form']}>
                    <div className={styles['wrapper-field-complete']}>
                        <FieldToCompleteComponent contactPage={true} isTextAreaField={false} isSelectField={false} fieldProps={data.contact.fields.name} valueRef={nameRef} />
                        <FieldToCompleteComponent contactPage={true} isTextAreaField={false} isSelectField={false} fieldProps={data.contact.fields.phone} valueRef={phoneRef} />
                    </div>
                    <div className={styles['wrapper-field-complete']}>
                        <FieldToCompleteComponent contactPage={true} isTextAreaField={false} isSelectField={false} fieldProps={data.contact.fields.email} valueRef={emailRef} />
                        <FieldToCompleteComponent contactPage={true} isTextAreaField={false} isSelectField={false} fieldProps={data.contact.fields.direction} valueRef={directionRef} />
                    </div>
                    <div className={styles['wrapper-field-complete']}>
                        <FieldToCompleteComponent contactPage={true} isTextAreaField={false} isSelectField={false} fieldProps={data.contact.fields.location} valueRef={locationRef} />
                        <FieldToCompleteComponent contactPage={false} selectWidth={true} isSelect={isSelect} isTextAreaField={false} isSelectField={true} selectProps={data.contact.fields.select.options} handlePaymentChange={handlePaymentChange} selectRef={selectRef} selectedPayment={selectedPayment} />
                    </div>
                    <div className={styles['wrapper-field-complete']}>
                        <button className={styles['btn-custom']}
                            disabled={noteRef.trim().length > 0}
                            onClick={handleChangeIsNote}
                            type="button"
                            aria-label={data.contact.buttons.addNote.ariaLabel}>
                            {data.contact.buttons.addNote.text}
                        </button>
                    </div>
                    <div className={`${styles['wrapper-field-complete']} ${styles['space-btn-submit']}`}>
                        <button className={styles['btn-send-custom']}
                            type='submit'
                            disabled={loadingText}
                            aria-label={data.contact.buttons.submit.ariaLabel}>
                            {loadingText ? data.contact.buttons.submit.loading : data.contact.buttons.submit.text}
                        </button>
                    </div>

                    <p className={styles['text-note-custom']}>{data.contact.info}</p>
                    {errorMessage && <p className={styles['text-error-custom']}>{errorMessage}</p>}
                    {isNote &&
                        <FieldToCompleteComponent contactPage={false} isTextAreaField={true} isSelectField={false} fieldProps={data.contact.fields.textarea} handleChangeNoteRef={handleChangeNoteRef} />}
                </form>
            </div>
        </div>
    )
}