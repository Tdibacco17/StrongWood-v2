import data from '@/models/es.json'
import styles from './AboutUsComponent.module.scss'
import { AboutUscardInterface } from '@/types'
import AboutUsCardComponent from '../AboutUsCardComponent/AboutUsCardComponent'

export default function AboutUsComponent() {
    return (
        <div className={styles['container-section-abouts']}>
            <div>
                <p className={styles['aboutus-title']}>{data.aboutUsPage.title}</p>
                <p className={styles['aboutus-subtitle']}>{data.aboutUsPage.subtitle}</p>
            </div>
            <div className={styles['container-aboutus-cards']}>
                {
                    data.aboutUsPage.cards.map((card: AboutUscardInterface) => {
                        return <AboutUsCardComponent key={card.card_id} cardData={card} />
                    })
                }
            </div>
        </div>
    )
}