import styles from './ProyectsComponent.module.scss'
import data from '@/models/es.json'
import { ImgDataInterface } from '@/types'
import ProyectsVideoComponent from '../ProyectsVideoComponent/ProyectsVideoComponent'
import ProyectsCardComponent from '../ProyectsCardComponent/ProyectsCardComponent'

export default function ProyectsComponent() {
    return (
        <section id={data.projects.sectionLink} className={styles['container-section-proyects']}>
            <p className={styles['proyects-title']}>{data.projects.title}</p>
            <div className={styles['container-wrapper']}>
                <div className={styles['container-cards-proyects']}>
                    {
                        data.projects.images.map((card: ImgDataInterface) => {
                            return <ProyectsCardComponent imgData={card} key={card.imgId} />
                        })
                    }
                </div>
                <p className={styles['proyects-subtitle']}>{data.projects.subtitle}</p>
                <div className={styles['container-videos-proyects']}>
                    {
                        data.projects.videos.map((cardVideo: ImgDataInterface) => {
                            return <ProyectsVideoComponent imgData={cardVideo} key={cardVideo.imgId} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}