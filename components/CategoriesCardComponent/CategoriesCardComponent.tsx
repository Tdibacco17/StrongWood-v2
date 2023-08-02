import { ImgDataInterface } from '@/types'
import styles from './CategoriesCardComponent.module.scss'
import Image from 'next/image'

export default function CategoriesCardComponent({ imgData }: { imgData: ImgDataInterface }) {
    return (
        <div className={styles['container-outer-card-services']}>
            <Image
                src={imgData.imgSrc}
                alt={imgData.imgAlt}
                fill
                sizes={imgData.sizes}
                loading='lazy'
                quality={100}
                style={{ objectFit: 'cover', objectPosition: imgData.objPosition }}
            />
            <div className={styles['container-overlay']} />
            <p className={styles['title-overlay']}>{imgData.imgAlt}</p>
        </div>
    )
}