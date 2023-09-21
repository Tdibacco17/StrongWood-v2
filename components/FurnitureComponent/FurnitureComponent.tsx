import { FurnitureDataCardsInterface, FurnitureDataContextInterface, FurnitureTableInterface } from '@/types/design'
import styles from './FurnitureComponent.module.scss'
import { useContext } from 'react'
import LoadingComponent from '../LoadingComponent/LoadingComponent'
import FurnitureTableContainer from '@/containers/FurnitureTableContainer/FurnitureTableContainer'
import { FurnitureDetailContext } from '@/context/FurnitureDetailProvider'
import { ImgDataInterface } from '@/types'

export default function FurnitureComponent({
    visibleTables,
    handleImageClick
}: {
    visibleTables: number[];
    handleImageClick: (image: FurnitureDataCardsInterface, tableId: number, tableTitle: string,) => void
}) {
    const { furnitureData } = useContext(
        FurnitureDetailContext
    ) as FurnitureDataContextInterface

    return (
        <div className={styles['container-section-design-detail']}>
            {
                furnitureData ?
                    furnitureData.map((table: FurnitureTableInterface, index: number) => {
                        return (
                            <div key={table.table_id} style={{ display: visibleTables.includes(index + 1) ? 'block' : 'none' }}>
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
            <div className={`${styles["container-all-inputs-measures"]}`}>
            </div>
        </div>
    )
}