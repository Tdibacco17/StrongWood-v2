import { MeasureType } from '@/types/design'
import styles from './FurnitureMeasureComponent.module.scss'
import { ChangeEvent } from "react";

export default function FurnitureMeasureComponent({
    inputItem,
    handleInputChange,
    value,
}: {
    inputItem: MeasureType,
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
    value: any,
}) {

    return (
        <label className={`${styles['container-section-measures']}`}>
            <p className={`${styles["title-measure"]}`}>{inputItem.title}</p>
            <input
                className={`${styles["input-measure"]}`}
                type="number"
                placeholder="En cm"
                value={value}
                onChange={handleInputChange}
                name={inputItem.title}
            />
        </label>
    )
}