import styles from './ProductsComponent.module.scss'
import ProductCardComponent from '../ProductCardComponent/ProductCardComponent'
import { productsData } from '@/models/products';

export default function ProductsComponent() {
    return (
        <div className={styles['container-section-products']}>
            <div className={styles['container-product-cards']}>
                {
                    Object.keys(productsData).map((productKey: string) => {
                        return <ProductCardComponent
                            key={productsData[productKey].product_slug}
                            product={productsData[productKey]}
                        />
                    })
                }
            </div>
        </div>
    )
}