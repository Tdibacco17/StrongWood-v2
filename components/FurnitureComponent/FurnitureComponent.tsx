import { DesignCategorieInterface, FurnitureDataContextInterface, FurnitureTableInterface, MeasureValues } from '@/types/design'
import styles from './FurnitureComponent.module.scss'
import { useContext } from 'react'
import LoadingComponent from '../LoadingComponent/LoadingComponent'
import FurnitureTableContainer from '@/containers/FurnitureTableContainer/FurnitureTableContainer'
import FurnitureMeasureComponent from '../FurnitureMeasureComponent/FurnitureMeasureComponent'
import { FurnitureDetailContext } from '@/context/FurnitureDetailProvider'

export default function FurnitureComponent({
    // measureValues,
    // imgSlugsWithAskMeasure,
    // handleMeasureChange,
}: {
        // measureValues: MeasureValues,
        // imgSlugsWithAskMeasure: string[],
        // handleMeasureChange: (measureName: string, value: number) => void,
    }) {
    const { furnitureData } = useContext(
        FurnitureDetailContext
    ) as FurnitureDataContextInterface

    return (
        <div className={styles['container-section-design-detail']}>
            {
                furnitureData ?
                    furnitureData.tables.map((table: FurnitureTableInterface) => {
                        return <FurnitureTableContainer
                            key={table.tableId}
                            table={table}
                        />
                    })
                    : <LoadingComponent />
            }
            <div className={`${styles["container-all-inputs-measures"]}`}>
                {/* {
                furnitureData && furnitureData.measures ?
                    <FurnitureMeasureComponent
                        measureData={furnitureData.measures}
                        imgSlugsWithAskMeasure={imgSlugsWithAskMeasure}
                        handleMeasureChange={handleMeasureChange}
                        measureValues={measureValues}
                    />
                    : <LoadingComponent />
            } */}
            </div>
        </div>
    )
}