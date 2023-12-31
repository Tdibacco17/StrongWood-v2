import NavigationContainer from '@/containers/NavigationContainer/NavigationContainer'
import styles from './page.module.scss'
import CategorieStyleContainer from '@/containers/CategorieStyleContainer/CategorieStyleContainer'
import data from '@/models/es.json'

export default function ClosetsPage() {
    return (
        <section id={data.designPage.sectionLink} className={styles['container-section-closets-page']}>
            <NavigationContainer isHome={false} showUrl={true} url={'/'} />
            <CategorieStyleContainer designKey={'placares'} />
        </section>
    )
}