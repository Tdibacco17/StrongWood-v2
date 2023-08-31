import { FieldToCompleteProps, SelectProps } from '@/types'
import styles from './FieldToCompleteComponent.module.scss'

export default function FieldToCompleteComponent({
    fieldProps,
    selectProps,
    valueRef,
    selectRef,
    handleChangeNoteRef,
    handlePaymentChange,
    selectedPayment,
    isTextAreaField,
    isSelectField,
    paymentMethod,
    isSelect,
}: FieldToCompleteProps) {

    if (isTextAreaField) {
        return (
            <label className={styles['wrapper-note']}>
                <p className={styles['text-custom']}>Nota</p>
                <textarea
                    className={styles['text-area-custom']}
                    placeholder="Ej: Dejanos tu consulta"
                    onChange={handleChangeNoteRef && handleChangeNoteRef} />
            </label>
        )
    }

    if (isSelectField) {
        return (
            <label className={styles['wrapper-label']}>
                {
                    isSelect && !isSelect ?
                        <p className={styles['text-custom']}>
                            Abonar en {paymentMethod ? paymentMethod : ""}
                        </p>
                        : <p className={styles['text-custom']}>
                            Abonar en {selectedPayment && selectedPayment}
                        </p>
                }
                <select
                    className={styles['select-custom']}
                    value={selectedPayment && selectedPayment}
                    onChange={handlePaymentChange && handlePaymentChange}
                    ref={selectRef && selectRef}>{
                        selectProps && selectProps.map((item: SelectProps) => {
                            return <option key={item.option_id} value={item.value}>{item.text}</option>
                        })
                    }
                </select>
            </label>
        )
    }

    return (
        <label className={styles['wrapper-label']}>
            <p className={styles['text-custom']}>{fieldProps?.label}</p>
            <input
                className={styles['input-custom']}
                // required
                type={fieldProps?.input.type}
                name={fieldProps?.input.name}
                placeholder={fieldProps?.input.placeholder}
                ref={valueRef && valueRef} />
        </label>
    )
}