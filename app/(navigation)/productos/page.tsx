import ProductsContainer from '@/containers/ProductsContainer/ProductsContainer'
import styles from './page.module.scss'
import { ProductsProvider } from '@/context/ProductsContextProvider'
import ProductsComponent from '@/components/ProductsComponent/ProductsComponent'

//cambiar a ProductsContainer
export default function ProductsPage() {
    return (
        <section className={styles['container-section-products']}>
            <ProductsProvider>
                <ProductsComponent /> 
            </ProductsProvider>
        </section>
    )
}