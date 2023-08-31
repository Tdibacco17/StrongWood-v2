import { ContactProps } from '@/types'
import styles from './ContactComponent.module.scss'
import data from '@/models/es.json'
import FieldToCompleteComponent from '../FieldToCompleteComponent/FieldToCompleteComponent'

export default function ContactComponent({
    nameRef,
    phoneRef,
    emailRef,
    directionRef,
    locationRef,
    noteRef,
    handleChangeNoteRef,
    loadingText,
    errorMessage,
    handleSubmit
}: ContactProps) {

    return (
        <div className={styles['container-section-contact']}>
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
                </div>
                <FieldToCompleteComponent isTextAreaField={true} isSelectField={false} fieldProps={data.contact.fields.textarea} handleChangeNoteRef={handleChangeNoteRef} />
                <button className={styles['btn-send-custom']}
                    type='submit'
                    disabled={loadingText}
                    aria-label={data.contact.buttons.submit.ariaLabel}>
                    {loadingText ? data.contact.buttons.submit.loading : data.contact.buttons.submit.text}
                </button>
                <p className={styles['text-note-custom']}>{data.contact.info}</p>
                {errorMessage && <p className={styles['text-error-custom']}>{errorMessage}</p>}
            </form>
        </div>
    )
}