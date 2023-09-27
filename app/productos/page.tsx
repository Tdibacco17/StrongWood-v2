import BannerComponent from '@/components/BannerComponent/BannerComponent'
import ProductsComponent from '@/components/ProductsComponent/ProductsComponent'
import NavigationContainer from '@/containers/NavigationContainer/NavigationContainer'
import styles from './page.module.scss'
import data from '@/models/es.json'

export default function ProductsPage() {
    return (
        <section id={data.productPage.sectionLink} className={styles['container-section-product-page']}>
            <NavigationContainer isHome={false} showUrl={true} url={'/'} />
            <BannerComponent imgData={data.productPage.banner.image} imgPosition={'productPage'} />
            <ProductsComponent />
        </section>
    )
}