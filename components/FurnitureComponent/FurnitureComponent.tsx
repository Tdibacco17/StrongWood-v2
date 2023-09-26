import { FurnitureDataCardsInterface, FurnitureDataContextInterface, FurnitureTableInterface, MeasureInterface, MeasureType } from '@/types/design'
import styles from './FurnitureComponent.module.scss'
import { ChangeEvent, useContext } from 'react'
import LoadingComponent from '../LoadingComponent/LoadingComponent'
import FurnitureTableContainer from '@/containers/FurnitureTableContainer/FurnitureTableContainer'
import { FurnitureDetailContext } from '@/context/FurnitureDetailProvider'
import FurnitureMeasureComponent from '../FurnitureMeasureComponent/FurnitureMeasureComponent'

export default function FurnitureComponent({
    measureValues,
    visibleTables,
    handleImageClick,
    handleSubmit,
    missingTableIds,
    handleInputChange,
    inputValues,
    areInputsEmpty,
    clickedImages
}: {
    measureValues: MeasureInterface | undefined,
    visibleTables: number[];
    handleImageClick: (image: FurnitureDataCardsInterface, tableId: number, tableTitle: string,) => void,
    handleSubmit: () => void,
    missingTableIds: number[],
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
    inputValues: any,
    areInputsEmpty: boolean,
    clickedImages: { tableId: number, tableTitle: string, images: string[] }[],
}) {
    const { furnitureData } = useContext(
        FurnitureDetailContext
    ) as FurnitureDataContextInterface

    return (
        <div className={styles['container-section-design-detail']}>
            {
                furnitureData ?
                    furnitureData.map((table: FurnitureTableInterface, index: number) => {
                        const isMissingImage = missingTableIds.includes(table.table_id);

                        return (
                            <div key={table.table_id} style={{ display: visibleTables.includes(index + 1) ? 'block' : 'none' }}>
                                <FurnitureTableContainer
                                    table={table}
                                    tableId={table.table_id}
                                    tableTitle={table.title}
                                    handleImageClick={handleImageClick}
                                    clickedImages={clickedImages}
                                    isMissingImage={isMissingImage}
                                />
                            </div>
                        )
                    })
                    : <div className={styles['container-loader-furniture-table']}><LoadingComponent /></div>
            }
            {
                furnitureData?.length < visibleTables.length && measureValues &&
                <div className={`${styles["container-all-inputs-measures"]}`}>
                    {measureValues?.leters.map((inputItem: MeasureType, index: number) => {
                        return <FurnitureMeasureComponent
                            key={index}
                            inputItem={inputItem}
                            handleInputChange={handleInputChange}
                            value={inputValues[inputItem.title] || ""}
                        />
                    })}
                    {areInputsEmpty && <div className={styles['tableStyle']} />}
                </div>
            }
            {furnitureData?.length < visibleTables.length && <button onClick={handleSubmit}>handleValidate</button>}
        </div>
    )
}