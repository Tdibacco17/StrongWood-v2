import { useContext } from 'react'
import styles from './ProductsComponent.module.scss'
import { ProductsContext } from '@/context/ProductsConextProvider'
import { ProductsDataContextInterface } from '@/types'

export default function ProductsComponent() {
    const { productsData } = useContext(
        ProductsContext
    ) as ProductsDataContextInterface

    return (
        <div className={styles['container-section-products']}>
            {JSON.stringify(productsData)}
        </div>
    )
}