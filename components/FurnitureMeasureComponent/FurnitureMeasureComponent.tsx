import { MeasureDataInterface, MeasureInterface, MeasureType, MeasureValues } from '@/types/design'
import styles from './FurnitureMeasureComponent.module.scss'
import { ChangeEvent } from "react";

export default function FurnitureMeasureComponent({
    // measureData,
    // measureValues,
    // imgSlugsWithAskMeasure,
    // handleMeasureChange,
}: {
    // measureData: MeasureDataInterface,
    // imgSlugsWithAskMeasure: string[],
    // measureValues: MeasureValues,
    // handleMeasureChange: (measureName: string, value: number) => void,
}) {
    //que cocina se eligio
    // const selectedAskMeasure: MeasureType[] | undefined = imgSlugsWithAskMeasure.length > 0 ? measureData[imgSlugsWithAskMeasure[0]].leters : undefined;
    
    return (
        <>
            {/* {
                selectedAskMeasure && Object.values(selectedAskMeasure as MeasureType[]).map((item: MeasureType) => {
                    return (
                        <div className={`${styles["container-section-input-measures"]}`} key={item.measure_id}>
                            <p className={`${styles["input-title"]}`}>{item.title}</p>
                            <input
                                className={`${styles["input-measure"]}`}
                                type="number"
                                value={measureValues[item.title] || ""}
                                placeholder="En cm"
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    handleMeasureChange(item.title, parseFloat(e.target.value))
                                }
                            />
                        </div>
                    )
                })
            } */}
        </>
    )
}