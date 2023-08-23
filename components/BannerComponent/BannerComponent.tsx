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
                sizes='100vw, (max-width: 442px) 32vw, (max-width: 768px) 35vw, (max-width: 1024px) 75vw'
                priority
                placeholder='blur'
                blurDataURL={imgData.imgBlur}
            />
        </section>
    )
}