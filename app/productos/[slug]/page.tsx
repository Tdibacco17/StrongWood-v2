import ProductDetailContainer from '@/containers/ProductDetailContainer/ProductDetailContainer'
import ServicesComponent from '@/components/ServicesComponent/ServicesComponent'
import data from '@/models/es.json'
import NavigationContainer from '@/containers/NavigationContainer/NavigationContainer'

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
    return (
        <section id={data.productPage.sectionLink} >
            <NavigationContainer isHome={false} showUrl={true} url={`/productos`} />
            <ProductDetailContainer params={params} />
            <ServicesComponent />
        </section>
    )
}