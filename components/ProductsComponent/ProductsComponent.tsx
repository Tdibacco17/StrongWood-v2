import styles from './ProductsComponent.module.scss'
import { productsData } from '@/models/products'
import ProductCardComponent from '../ProductCardComponent/ProductCardComponent'

export default function ProductsComponent() {
    return (
        <div className={styles['container-section-products']}>
            {
                Object.keys(productsData).map((productKey: string) => {
                    return <ProductCardComponent
                        key={productKey}
                        product={productsData[productKey]}
                    />
                })
            }
        </div>
    )
}