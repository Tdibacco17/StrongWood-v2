import NavigationContainer from '@/containers/NavigationContainer/NavigationContainer'
import styles from './page.module.scss'
import CategorieStyleContainer from '@/containers/CategorieStyleContainer/CategorieStyleContainer'
import data from '@/models/es.json'

export default function BathroomPage() {
    return (
        <section id={data.designPage.sectionLink} className={styles['container-section-bathroom-page']}>
            <NavigationContainer isHome={false} showUrl={true} url={'/'} />
            <CategorieStyleContainer designKey={'banio'} />
        </section>
    )
}