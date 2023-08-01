import styles from './FooterComponent.module.scss'
import data from '@/models/es.json'
import ScrollToButton from '@/utils/ScrollToButton/ScrollToButton'

export default function FooterComponent() {
    return (
        <section className={styles['container-section-footer']}>
            <ScrollToButton targetSection='top' />
            <div className={styles['divider']}>
                <p className={styles['secondary-title']}>{data.footer.secondaryTitle}</p>
            </div>
        </section>
    )
}