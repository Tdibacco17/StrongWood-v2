import { ImgDataInterface } from '@/types'
import styles from './ServicesCardComponent.module.scss'
import Image from 'next/image'

export default function ServicesCardComponent({ imgData }: { imgData: ImgDataInterface }) {
    return (
        <div className={styles['container-outer-card-services']}>
            <div className={styles['container-inner-card-services']}>
                <Image
                    src={imgData.imgSrc}
                    alt={imgData.imgAlt}
                    fill
                />
            </div>
            <div className={styles['container-overlay']} />
            <p className={styles['title-overlay']}>{imgData.imgAlt}</p>
        </div>
    )
}