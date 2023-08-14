import { ImgBlurDataInterface, ImgDataInterface } from '@/types'
import styles from './CategoriesCardComponent.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import staticBlurDataUrl from '@/utils/blur/staticBlurDataUrl'
import dynamicBlurDataUrl from '@/utils/blur/dynamicBlurDataUrl'

export default async function CategoriesCardComponent({ imagesData }: { imagesData: ImgDataInterface[] }) {
    const photosArray = imagesData.map(async (photo) => ({
        ...photo, blurHash: await dynamicBlurDataUrl(photo.imgSrc)
    }))
    const photos = await Promise.all(photosArray)

    return (
        <>
            {
                photos.map((card: ImgBlurDataInterface) => {
                    return (
                        <Link key={card.img_id} href={card.link ?? ''} /*as={card.link ?? ''}*/ className={styles['container-outer-card-services']}>
                            <Image
                                className={styles['container-inner-card-services']}
                                src={card.imgSrc}
                                alt={card.imgAlt}
                                fill
                                sizes={card.sizes}
                                quality={100}
                                placeholder='blur'
                                blurDataURL={card.blurHash || staticBlurDataUrl()}
                                priority={card.img_id <= 1 ? true : false}
                            />
                            <div className={styles['container-overlay-card-services']} />
                            <p className={styles['title-services-overlay']}>{card.imgAlt}</p>
                        </Link >
                    )
                })
            }
        </>

    )
}