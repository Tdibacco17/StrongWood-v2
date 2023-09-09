import Image from 'next/image'
import styles from './BannerComponent.module.scss'
import { BannerPositionInterface, ImgDataInterface } from '@/types'
// import dynamicBlurDataUrl from '@/utils/blur/dynamicBlurDataUrl';
// import staticBlurDataUrl from '@/utils/blur/staticBlurDataUrl';

export default function BannerComponent({ imgData, imgPosition }: { imgData: ImgDataInterface, imgPosition: BannerPositionInterface }) {
    // const blurHash = await dynamicBlurDataUrl(imgData.imgSrc);

    return (
        <section className={styles['container-outer-banner-image']}>
            <Image
                className={`${styles['container-inner-banner-image']} ${styles[`${imgPosition}`]}`}
                src={imgData.imgSrc}
                alt={imgData.imgAlt}
                fill
                sizes='(max-width: 1024px) 75vw, (max-width: 768px) 35vw,(max-width: 442px) 33vw, 100vw'
                priority
                placeholder='blur'
                // blurDataURL={blurHash || staticBlurDataUrl()}
                blurDataURL={imgData.imgBlur}
            />
        </section>
    )
}