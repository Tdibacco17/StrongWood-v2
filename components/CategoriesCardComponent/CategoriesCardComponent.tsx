import { ImgDataInterface } from '@/types'
import styles from './CategoriesCardComponent.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function CategoriesCardComponent({ imageData }: { imageData: ImgDataInterface }) {
    return (
        <Link key={imageData.img_id} href={imageData.link ?? ''} /*as={card.link ?? ''}*/ className={styles['container-outer-card-services']}>
            <Image
                className={styles['container-inner-card-services']}
                src={imageData.imgSrc}
                alt={imageData.imgAlt}
                fill
                sizes={imageData.sizes}
                placeholder='blur'
                blurDataURL={imageData.imgBlur}
            />
            <div className={styles['container-overlay-card-services']} />
            <p className={styles['title-services-overlay']}>{imageData.imgAlt}</p>
        </Link >
    )
}