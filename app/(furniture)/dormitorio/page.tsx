import NavigationContainer from '@/containers/NavigationContainer/NavigationContainer'
import styles from './page.module.scss'
import CategorieStyleContainer from '@/containers/CategorieStyleContainer/CategorieStyleContainer'
import data from '@/models/es.json'

export default function BedroomPage() {
    return (
        <>
            <NavigationContainer isHome={false} showUrl={true} url={'/'} />
            <section id={data.designPage.sectionLink} className={styles['container-section-bedroom-page']}>
                <CategorieStyleContainer designKey={'dormitorio'} />
            </section>
        </>
    )
}