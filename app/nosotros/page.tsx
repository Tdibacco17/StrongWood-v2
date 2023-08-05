import BannerComponent from '@/components/BannerComponent/BannerComponent'
import styles from './page.module.scss'
import data from '@/models/es.json'

export default function AboutUsPage() {
    return (
        <section id={data.aboutUs.sectionLink} className={styles['container-section-aboutus-page']}>
            <BannerComponent imgData={data.aboutUs.image} />
        </section>
    )
}