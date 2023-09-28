import { FurnitureDataContextInterface, FurnitureProps, FurnitureTableInterface, MeasureType } from '@/types/design'
import styles from './FurnitureComponent.module.scss'
import { useContext } from 'react'
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
    clickedImages,
    errorMessage
}: FurnitureProps) {
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
                    <div className={`${styles["container-inputs"]}`}>
                        {measureValues?.letters.map((inputItem: MeasureType) => {
                            return <FurnitureMeasureComponent
                                key={inputItem.measure_id}
                                inputItem={inputItem}
                                handleInputChange={handleInputChange}
                                value={inputValues[inputItem.title] || ""}
                            />
                        })}
                    </div>
                    {areInputsEmpty && <p className={styles['text-error-custom']}>FALTA COMPLETAR ESTE CAMPO</p>}
                </div>
            }
            {furnitureData?.length < visibleTables.length &&
                <div className={styles['containaer-btn-finish-order']}>
                    <button onClick={handleSubmit} className={styles['btn-finish-order']}>COTIZAR</button>
                    {errorMessage && <p className={styles['text-error-custom']}>{errorMessage}</p>}
                </div>
            }
        </div>
    )
}