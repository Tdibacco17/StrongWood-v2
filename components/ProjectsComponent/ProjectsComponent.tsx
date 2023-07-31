import Image from 'next/image'
import styles from './ProjectsComponent.module.scss'
import data from '@/models/es.json'
import { ImgDataInterface } from '@/types'
import ProjectsVideoCardComponent from '../ProjectsCardComponent/ProjectsVideoCardComponent'

export default function ProjectsComponent() {
    return (
        <div id={data.projects.link} className={styles['container-section-projects']}>
            <div className={styles['container-wrapper-images']}>
                <div className={styles['container-outer-project-image']}>
                    <div className={styles['container-inner-project-image']}>
                        <Image
                            src={data.projects.image.imgSrc}
                            alt={data.projects.image.imgAlt}
                            fill
                        />
                    </div>
                </div>
                <div className={styles['container-section-video-projects']}>
                    <div>
                        <p className={styles['projects-title']}>{data.projects.title}</p>
                        <p className={styles['projects-subtitle']}>{data.projects.subtitle}</p>
                    </div>
                    <div className={styles['container-video-cards-projects']}>
                        {
                            data.projects.videos.map((video: ImgDataInterface) => {
                                return <ProjectsVideoCardComponent videoData={video} key={video.img_id} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}