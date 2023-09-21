import { DesignCategorieInterface, DesignDataContextInterface, FurnitureTableInterface } from '@/types/design'
import styles from './DesignDetailComponent.module.scss'
import { DesignDetailContext } from '@/context/DesignDetailProvider'
import { useContext } from 'react'
import LoadingComponent from '../LoadingComponent/LoadingComponent'
import FurnitureTableContainer from '@/containers/FurnitureTableContainer/FurnitureTableContainer'

export default function DesignDetailComponent({
    designKey,
}: {
    designKey: DesignCategorieInterface,
}) {
    const { designData } = useContext(
        DesignDetailContext
    ) as DesignDataContextInterface

    console.log("[TALBE-INFO]: ", designData)

    return (
        <div className={styles['container-section-design-detail']}>
            {
                designData ?
                    designData.map((table: FurnitureTableInterface) => {
                        return <FurnitureTableContainer
                            designKey={designKey}
                            key={table.tableId}
                            table={table}
                        />;
                    })
                    // solo muestro la primer tabla
                    : <LoadingComponent />
            }
        </div>
    )
}