import NavigationContainer from '@/containers/NavigationContainer/NavigationContainer'
import styles from './page.module.scss'
import CategorieStyleComponent from '@/components/CategorieStyleComponent/CategorieStyleComponent'
import CategorieStyleContainer from '@/containers/CategorieStyleContainer/CategorieStyleContainer'

export default function ClosetsPage() {
    return (
        <section className={styles['container-section-closets-page']}>
            <NavigationContainer isHome={false} showUrl={true} url={'/'} />
            <CategorieStyleContainer designKey={'placares'} />
        </section>
    )
}