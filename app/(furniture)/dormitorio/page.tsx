import NavigationContainer from '@/containers/NavigationContainer/NavigationContainer'
import styles from './page.module.scss'
import CategorieStyleContainer from '@/containers/CategorieStyleContainer/CategorieStyleContainer'

export default function BedroomPage() {
    return (
        <>
            <NavigationContainer isHome={false} showUrl={true} url={'/'} />
            <section className={styles['container-section-bedroom-page']}>
                <CategorieStyleContainer designKey={'dormitorio'} />
            </section>
        </>
    )
}