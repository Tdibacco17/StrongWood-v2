import ContactContainer from "@/containers/ContactContainer/ContactContainer";
import NavigationContainer from "@/containers/NavigationContainer/NavigationContainer";
import data from '@/models/es.json'

export default function ContactPage() {
    return (
        <>
            <NavigationContainer isHome={false} showUrl={true} url={`/`} />
            <section id={data.contact.sectionLink}>
                <ContactContainer />
            </section>
        </>
    )
}