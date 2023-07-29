import styles from './ServicesComponent.module.scss'
import data from '@/models/es.json'
import ServicesCardComponent from '../ServicesCardComponent/ServicesCardComponent'
import { ImgDataInterface } from '@/types'

export default function ServicesComponent() {
    return (
        <div id={data.services.link} className={styles['container-section-services']}>
            <p className={styles['services-title']}>{data.services.title}</p>
            <div className={styles['container-cards-services']}>
                {
                    data.services.images.map((card: ImgDataInterface) => {
                        return <ServicesCardComponent imgData={card} key={card.img_id}/>
                    })
                }
            </div>
        </div>
    )
}