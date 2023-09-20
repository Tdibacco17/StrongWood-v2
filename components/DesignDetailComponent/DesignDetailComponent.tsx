import { DesignDataContextInterface, FurnitureTableInterface } from '@/types/design'
import styles from './DesignDetailComponent.module.scss'
import { DesignDetailContext } from '@/context/DesignDetailProvider'
import { useContext } from 'react'
import LoadingComponent from '../LoadingComponent/LoadingComponent'
import FurnitureTableContainer from '@/containers/FurnitureTableContainer/FurnitureTableContainer'

export default function DesignDetailComponent() {
    const { designData } = useContext(
        DesignDetailContext
    ) as DesignDataContextInterface

    console.log(designData, "tabla")

    return (
        <div className={styles['container-section-design-detail']}>
            {
                designData ?
                    designData.map((table: FurnitureTableInterface) => {
                        return <FurnitureTableContainer key={table.tableId} />;
                    }) : <LoadingComponent />
            }
        </div>
    )
}