import NavigationContainer from '@/containers/NavigationContainer/NavigationContainer'
import styles from './page.module.scss'
import CategorieStyleComponent from '@/components/CategorieStyleComponent/CategorieStyleComponent'

export default function BedroomPage() {
    return (
        <section className={styles['container-section-bedroom-page']}>
            <NavigationContainer isHome={false} showUrl={true} url={'/'} />
            <CategorieStyleComponent designKey={'dormitorio'} />
        </section>
    )
}