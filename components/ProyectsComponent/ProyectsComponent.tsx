import styles from './ProyectsComponent.module.scss'
import data from '@/models/es.json'
import { ImgDataInterface } from '@/types'
import ProyectsVideoComponent from '../ProyectsVideoComponent/ProyectsVideoComponent'

export default function ProyectsComponent() {
    return (
        <section id={data.projects.sectionLink} className={styles['container-section-proyects']}>
            <div className={styles['container-content']}>
                <p className={styles['proyects-title']}>{data.projects.title}</p>
                <div className={styles['container-videos-proyects']}>
                    {
                        data.projects.videos.map((cardVideo: ImgDataInterface) => {
                            return <ProyectsVideoComponent imgData={cardVideo} key={cardVideo.img_id} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}