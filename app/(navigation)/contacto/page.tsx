import ContactContainer from '@/containers/ContactContainer/ContactContainer'

export default function ContactPage({ searchParams }: { searchParams?: { pago?: string | undefined } }) {
    return (
        <section>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <ContactContainer pago={searchParams?.pago?.trim() ?? ""} />
        </section>
    )
}