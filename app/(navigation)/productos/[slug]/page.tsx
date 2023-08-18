import { ProductDetailProvider } from '@/context/ProductDetailProvider'
import styles from './page.module.scss'
import ProductDetailContainer from '@/containers/ProductDetailContainer/ProductDetailContainer'
import ServicesComponent from '@/components/ServicesComponent/ServicesComponent'
import data from '@/models/es.json'

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
    return (
        <div id={data.homePage.sectionLink} className={styles['container-section-product-detail']}>
            <ProductDetailProvider>
                <ProductDetailContainer params={params} />
                <ServicesComponent />
            </ProductDetailProvider>
        </div>
    )
}