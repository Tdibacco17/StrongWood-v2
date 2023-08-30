import { ContactProps } from '@/types'
import styles from './ContactComponent.module.scss'

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
                <div className={styles['wrapper-input']}>
                    <label className={styles['wrapper-label']}>
                        <p className={styles['text-custom']}>Nombre</p>
                        <input
                            className={styles['input-custom']}
                            // required
                            type="text"
                            name="name"
                            placeholder='Ej: Nombre'
                            ref={nameRef} />
                    </label>
                    <label className={styles['wrapper-label']}>
                        <p className={styles['text-custom']}>Teléfono</p>
                        <input
                            className={styles['input-custom']}
                            // required
                            type="text"
                            name="phone"
                            placeholder='Ej: 114344...'
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
                            // required
                            type="text"
                            name="direction"
                            placeholder='Ej: Calle 123 piso A'
                            ref={directionRef} />
                    </label>
                </div>
                <div className={styles['wrapper-input']}>
                    <label className={styles['wrapper-label']}>
                        <p className={styles['text-custom']}>Localidad</p>
                        <input
                            className={styles['input-custom']}
                            // required
                            type="text"
                            name="location"
                            placeholder='Ej: Caseros'
                            ref={locationRef} />
                    </label>
                </div>

                <label className={styles['wrapper-note']}>
                    <p className={styles['text-custom']}>Nota</p>
                    <textarea
                        className={styles['text-area-custom']}
                        placeholder="Ej: Dejanos tu consulta"
                        onChange={handleChangeNoteRef} />
                </label>
                <button
                    className={styles['btn-send-custom']}
                    disabled={loadingText}
                    type='submit'
                    aria-label='Enviar mensaje de contacto'>
                    {loadingText ? "Cargando.." : "Enviar consulta"}
                </button>
                <p className={styles['text-note-custom']}>Nos pondremos en contacto dentro de las proximias 72hs</p>
                {errorMessage && <p className={styles['text-error-custom']}>{errorMessage}</p>}
            </form>
        </div>
    )
}