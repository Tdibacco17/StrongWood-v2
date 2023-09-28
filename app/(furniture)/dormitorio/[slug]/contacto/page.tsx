import ContactFurnitureContainer from "@/containers/ContactFurnitureContainer/ContactFurnitureContainer";
import NavigationContainer from "@/containers/NavigationContainer/NavigationContainer";
import data from '@/models/es.json'

export default function ContactBedroomPage({ params }: { params: { slug: string } }) {
    return (
        <section id={data.contact.sectionLink}>
            <NavigationContainer isHome={false} showUrl={true} url={`/dormitorio/${params.slug}`} />
            <ContactFurnitureContainer designKey={'dormitorio'} params={params}/>
        </section>
    )
}