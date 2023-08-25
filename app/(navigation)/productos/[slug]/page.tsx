import ProductDetailContainer from '@/containers/ProductDetailContainer/ProductDetailContainer'
import ServicesComponent from '@/components/ServicesComponent/ServicesComponent'
import data from '@/models/es.json'

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
    return (
        <section id={data.productPage.sectionLink} >
            <ProductDetailContainer params={params} />
            <ServicesComponent />
        </section>
    )
}