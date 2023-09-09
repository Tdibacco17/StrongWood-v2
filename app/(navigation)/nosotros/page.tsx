import NavigationContainer from '@/containers/NavigationContainer/NavigationContainer'
import styles from './page.module.scss'
import data from '@/models/es.json'
import BannerComponent from '@/components/BannerComponent/BannerComponent'

export default function AboutUsPage() {
    return (
        <section id={data.aboutUsPage.sectionLink} className={styles['container-section-aboutus-page']}>
            <NavigationContainer isHome={false} showUrl={true} url={'/'} />
            <BannerComponent imgData={data.aboutUsPage.banner.image} imgPosition={'aboutUsPage'} />
        </section>
    )
}