import Image from 'next/image'
import styles from './BannerComponent.module.scss'
import { ImgDataInterface } from '@/types'

export default function BannerComponent({ imgData }: { imgData: ImgDataInterface }) {
    return (
        <section className={styles['container-outer-banner-image']}>
            <Image
                className={styles['container-inner-banner-image']}
                src={imgData.imgSrc}
                alt={imgData.imgAlt}
                fill
                sizes='100vw'
                priority
                quality={100}
            />
        </section>
    )
}