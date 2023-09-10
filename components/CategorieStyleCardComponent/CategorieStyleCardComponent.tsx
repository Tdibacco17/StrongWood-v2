import Link from 'next/link'
import styles from './CategorieStyleCardComponent.module.scss'
import { ImgDataInterface } from '@/types'
import Image from 'next/image'
// import dynamicBlurDataUrl from '@/utils/blur/dynamicBlurDataUrl';
// import staticBlurDataUrl from '@/utils/blur/staticBlurDataUrl';


export default function CategorieStyleCardComponent({ imageData }: { imageData: ImgDataInterface }) {
    // const blurHash = await dynamicBlurDataUrl(imageData.imgSrc);

    return (
        <Link href={`/`} className={styles['container-outer-categorie-style-image']}>
            <Image
                className={`${styles['container-inner-categorie-style-image']}`}
                src={imageData.imgSrc}
                alt={imageData.imgAlt}
                fill
                sizes='(max-width: 1024px) 75vw, (max-width: 768px) 35vw,(max-width: 442px) 33vw, 100vw'
                priority
                placeholder='blur'
                // blurDataURL={blurHash || staticBlurDataUrl()}
                blurDataURL={imageData.imgBlur}
            />
        </Link>
    )
}