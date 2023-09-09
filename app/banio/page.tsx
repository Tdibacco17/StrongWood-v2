import NavigationContainer from '@/containers/NavigationContainer/NavigationContainer'
import styles from './page.module.scss'
import CategorieStyleComponent from '@/components/CategorieStyleComponent/CategorieStyleComponent'

export default function BathroomPage() {
    return (
        <section className={styles['container-section-bathroom-page']}>
            <NavigationContainer isHome={false} showUrl={true} url={'/'} />
            <CategorieStyleComponent designKey={'ba%C3%B1o'} />
        </section>
    )
}