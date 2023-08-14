import styles from './page.module.scss'
import ProductsComponent from '@/components/ProductsComponent/ProductsComponent'

export default function ProductsPage() {
    return (
        <section className={styles['container-section-products']}>
            <ProductsComponent />
        </section>
    )
}