import ContactProductContainer from '@/containers/ContactProductContainer/ContactProductContainer'
import data from '@/models/es.json'
export default function ContactProductPage({ params }: { params: { slug: string } }) {
    return (
        <section id={data.productPage.sectionLink}>
            <ContactProductContainer params={params} />
        </section>
    )
}