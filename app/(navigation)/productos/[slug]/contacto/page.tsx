import ContactContainer from '@/containers/ContactContainer/ContactContainer'
import data from '@/models/es.json'
export default function ContactProductPage({ params }: { params: { slug: string } }) {
    return (
        <section id={data.productPage.sectionLink}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
                <ContactContainer params={params} />
        </section>
    )
}