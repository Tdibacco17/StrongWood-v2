import ProductsComponent from '@/components/ProductsComponent/ProductsComponent'
import data from '@/models/es.json'

export default function ProductsPage() {
    return (
        <section id={data.homePage.sectionLink}>
            <ProductsComponent />
        </section>
    )
}