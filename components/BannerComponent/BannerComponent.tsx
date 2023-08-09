import Image from 'next/image'
import styles from './BannerComponent.module.scss'
import { ImgDataInterface } from '@/types'

export default function BannerComponent({ imgData }: { imgData: ImgDataInterface }) {
    return (
        <section className={styles['container-outer-banner-image']}>
            <Image
                src={imgData.imgSrc}
                alt={imgData.imgAlt}
                fill
                sizes='100vw'
                // loading='lazy'
                priority
                quality={100}
                style={{ objectFit: 'cover', objectPosition: imgData.objPosition, }}
            />
        </section>
    )
}