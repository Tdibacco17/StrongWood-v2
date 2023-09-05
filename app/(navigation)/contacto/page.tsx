import ContactContainer from "@/containers/ContactContainer/ContactContainer";
import data from '@/models/es.json'

export default function ContactPage() {
    return (
        <section  id={data.contact.sectionLink}>
            <ContactContainer />
        </section>
    )
}