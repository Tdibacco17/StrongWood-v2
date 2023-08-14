import { ProductDetailProvider } from '@/context/ProductDetailProvider'
import styles from './page.module.scss'
import ProductDetailContainer from '@/containers/ProductDetailContainer/ProductDetailContainer'

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
    return (
        <div className={styles['container-section-product-detail']}>
            <ProductDetailProvider>
                <ProductDetailContainer params={params} />
            </ProductDetailProvider>
        </div>
    )
}