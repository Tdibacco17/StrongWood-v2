import NavigationContainer from '@/containers/NavigationContainer/NavigationContainer'
import styles from './page.module.scss'
import CategorieStyleComponent from '@/components/CategorieStyleComponent/CategorieStyleComponent'

export default function KitchenPage() {
    return (
        <section className={styles['container-section-kitchen-page']}>
            <NavigationContainer isHome={false} showUrl={true} url={'/'} />
            <CategorieStyleComponent designKey={'cocina'} />
        </section>
    )
}