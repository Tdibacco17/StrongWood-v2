import ContactFurnitureContainer from "@/containers/ContactFurnitureContainer/ContactFurnitureContainer";
import NavigationContainer from "@/containers/NavigationContainer/NavigationContainer";
import data from '@/models/es.json'

export default function ContactCocinasPage({ params }: { params: { slug: string } }) {
    return (
        <section id={data.contact.sectionLink}>
            <NavigationContainer isHome={false} showUrl={true} url={`/cocinas/${params.slug}`} />
            <ContactFurnitureContainer params={params}/>
        </section>
    )
}