import ButtonTopComponent from './BtnTopComponent/BtnTopComponent'
import styles from './FooterComponent.module.scss'
import data from '@/models/es.json'

export default function FooterComponent() {
    return (
        <section className={styles['container-section-footer']}>
            <div className={styles['primary-footer']}>
                <ButtonTopComponent
                    scrollTo={data.footer.scrollTo}
                    title={data.footer.button.title}
                />
            </div>
            <div className={styles['divider']}>
                <p className={styles['secondary-title']}>{data.footer.secondaryTitle}</p>
            </div>
        </section>
    )
}