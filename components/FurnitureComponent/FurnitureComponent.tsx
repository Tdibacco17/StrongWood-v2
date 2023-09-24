import { FurnitureDataCardsInterface, FurnitureDataContextInterface, FurnitureTableInterface, MeasureInterface } from '@/types/design'
import styles from './FurnitureComponent.module.scss'
import { useContext } from 'react'
import LoadingComponent from '../LoadingComponent/LoadingComponent'
import FurnitureTableContainer from '@/containers/FurnitureTableContainer/FurnitureTableContainer'
import { FurnitureDetailContext } from '@/context/FurnitureDetailProvider'

export default function FurnitureComponent({
    measureValues,
    visibleTables,
    handleImageClick,
    handleValidate,
    missingTableIds,
}: {
    measureValues: MeasureInterface | undefined,
    visibleTables: number[];
    handleImageClick: (image: FurnitureDataCardsInterface, tableId: number, tableTitle: string,) => void,
    handleValidate: () => void,
    missingTableIds: number[]
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
                            <div key={table.table_id} style={{ display: visibleTables.includes(index + 1) ? 'block' : 'none' }}
                                className={`${isMissingImage ? styles['tableStyle'] : ""}`}>
                                <FurnitureTableContainer
                                    table={table}
                                    tableId={table.table_id}
                                    tableTitle={table.title}
                                    handleImageClick={handleImageClick}
                                />
                            </div>
                        )
                    })
                    : <LoadingComponent />
            }
            {furnitureData?.length < visibleTables.length && <button onClick={handleValidate}>handleValidate</button>}
            <div className={`${styles["container-all-inputs-measures"]}`}>
                {
                    furnitureData?.length < visibleTables.length &&
                    measureValues?.leters.map((e: any, index: number) => {
                        return <div key={index}>medida + {index}</div>
                    })
                }
            </div>
        </div>
    )
}