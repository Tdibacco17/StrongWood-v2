import { ImgDataInterface } from '@/types'
import styles from './CategoriesCardComponent.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function CategoriesCardComponent({ imgData }: { imgData: ImgDataInterface }) {
    return (
        <Link href={imgData.link ?? ''} as={imgData.link ?? ''} className={styles['container-outer-card-services']} >
            <Image
                src={imgData.imgSrc}
                alt={imgData.imgAlt}
                fill
                sizes={imgData.sizes}
                loading='lazy'
                quality={100}
                style={{ objectFit: 'cover', objectPosition: imgData.objPosition }}
            />
            <div className={styles['container-overlay-card-services']} />
            <p className={styles['title-services-overlay']}>{imgData.imgAlt}</p>
        </Link >
    )
}