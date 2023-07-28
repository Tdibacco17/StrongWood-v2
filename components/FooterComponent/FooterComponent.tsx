import styles from './FooterComponent.module.scss'
import data from '@/models/es.json'

export default function FooterComponent() {
    return (
        <section className={styles['container-section-footer']}>
            <p className={styles['title']}>{data.footer.title}</p>
            <div className={styles['divider']}>
                <p className={styles['secondary-title']}>{data.footer.secondaryTitle}</p>
            </div>
        </section>
    )
}