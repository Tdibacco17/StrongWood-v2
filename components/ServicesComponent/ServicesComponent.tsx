import styles from './ServicesComponent.module.scss'
import data from '@/models/es.json'
import ServicesCardComponent from '../ServicesCardComponent/ServicesCardComponent'
import { ImgDataInterface } from '@/types'

export default function ServicesComponent() {
    return (
        <div id={data.homePage.services.link} className={styles['container-section-services']}>
            <p className={styles['services-title']}>{data.homePage.services.title}</p>
            <div className={styles['container-cards-services']}>
                {
                    data.homePage.services.images.map((card: ImgDataInterface) => {
                        return <ServicesCardComponent imgData={card} />
                    })
                }
            </div>
        </div>
    )
}