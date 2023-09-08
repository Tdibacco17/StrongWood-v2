import ProductsComponent from '@/components/ProductsComponent/ProductsComponent'
import NavigationContainer from '@/containers/NavigationContainer/NavigationContainer'
import data from '@/models/es.json'

export default function ProductsPage() {
    return (
        <section id={data.productPage.sectionLink}>
            <NavigationContainer isHome={false} showUrl={true} url={'/'} />
            <ProductsComponent />
        </section>
    )
}