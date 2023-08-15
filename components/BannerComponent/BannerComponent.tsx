import Image from 'next/image'
import styles from './BannerComponent.module.scss'
import { ImgDataInterface } from '@/types'
import staticBlurDataUrl from '@/utils/blur/staticBlurDataUrl'
import dynamicBlurDataUrl from '@/utils/blur/dynamicBlurDataUrl'

export default async function BannerComponent({ imgData }: { imgData: ImgDataInterface }) {
    const blurHash = await dynamicBlurDataUrl(imgData.imgSrc);

    return (
        <section className={styles['container-outer-banner-image']}>
            <Image
                className={styles['container-inner-banner-image']}
                src={imgData.imgSrc}
                alt={imgData.imgAlt}
                fill
                sizes='100vw, (max-width: 442px) 32vw, (max-width: 768px) 35vw, (max-width: 1024px) 75vw'
                priority
                quality={100}
                placeholder='blur'
                blurDataURL={
                    blurHash
                    || staticBlurDataUrl()}
            />
        </section>
    )
}