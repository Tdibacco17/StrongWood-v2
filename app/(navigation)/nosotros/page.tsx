import styles from './page.module.scss'
import data from '@/models/es.json'

export default function AboutUsPage() {
    return (
        <section id={data.aboutUs.sectionLink} className={styles['container-section-aboutus-page']}>
        </section>
    )
}