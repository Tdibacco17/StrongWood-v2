import ProductsContainer from '@/containers/ProductsContainer/ProductsContainer'
import styles from './page.module.scss'
import { ProductsProvider } from '@/context/ProductsConextProvider'

export default function ProductsPage() {
    return (
        <section className={styles['container-section-products']}>
            <ProductsProvider>
                <ProductsContainer />
            </ProductsProvider>
        </section>
    )
}