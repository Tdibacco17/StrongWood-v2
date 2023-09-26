import { MeasureDataInterface, MeasureInterface, MeasureType, MeasureValues } from '@/types/design'
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
        <label>
            <p>{inputItem.title}</p>
            <input
                type="number"
                placeholder="En cm"
                value={value}
                onChange={handleInputChange}
                name={inputItem.title}
            />
        </label>
    )
}