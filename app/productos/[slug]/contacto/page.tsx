import ContactProductContainer from '@/containers/ContactProductContainer/ContactProductContainer'
import NavigationContainer from '@/containers/NavigationContainer/NavigationContainer'
import data from '@/models/es.json'
export default function ContactProductPage({ params }: { params: { slug: string } }) {
    return (
        <section id={data.productPage.sectionLink}>
            <NavigationContainer isHome={false} showUrl={true} url={`/productos/${params.slug}`} />
            <ContactProductContainer params={params} />
        </section>
    )
}