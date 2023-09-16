import ContactProductContainer from '@/containers/ContactProductContainer/ContactProductContainer'
import NavigationContainer from '@/containers/NavigationContainer/NavigationContainer'
import data from '@/models/es.json'
export default function ContactProductPage({ params }: { params: { slug: string } }) {
    return (
        <>
            <NavigationContainer isHome={false} showUrl={true} url={`/productos/${params.slug}`} />
            <section id={data.productPage.sectionLink}>
                <ContactProductContainer params={params} />
            </section>
        </>
    )
}