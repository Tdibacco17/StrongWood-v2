import Image from 'next/image'
import styles from './ProjectsVideoCardComponent.module.scss'
import { ImgDataInterface } from '@/types'

export default function ProjectsVideoCardComponent({ videoData }: { videoData: ImgDataInterface }) {
    return (
        <div className={styles['container-outer-video-card-projects']}>
            <div className={styles['container-inner-video-card-projects']}>
                <Image
                    src={videoData.imgSrc}
                    alt={videoData.imgAlt}
                    fill
                />
            </div>
            <div className={styles['container-overlay']} />
            <p className={styles['title-overlay']}>{videoData.imgAlt}</p>
        </div>
    )
}