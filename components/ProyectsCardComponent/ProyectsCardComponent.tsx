import Image from 'next/image';
import styles from './ProyectsCardComponent.module.scss';
import { ImgDataInterface } from '@/types';
import staticBlurDataUrl from '@/utils/blur/staticBlurDataUrl'
import dynamicBlurDataUrl from '@/utils/blur/dynamicBlurDataUrl'

export default async function ProyectsCardComponent({ imagesData }: { imagesData: ImgDataInterface[] }) {
    const photosArray = imagesData.map(async (photo) => ({
        ...photo, blurHash: await dynamicBlurDataUrl(photo.imgSrc)
    }))
    const photos = await Promise.all(photosArray)
    return (
        <>
            {
                photos.map((card: ImgDataInterface) => {
                    return (
                        <div key={card.img_id} className={`${styles['container-outer-proyects-card']}`}>
                            <Image
                                src={card.imgSrc}
                                alt={card.imgAlt}
                                fill
                                sizes='100vw, (max-width: 442px) 32vw, (max-width: 768px) 35vw, (max-width: 992px) 50vw, (max-width: 1024px) 75vw '
                                quality={100}
                                className={`${styles['container-inner-proyects-card']}`}
                                placeholder='blur'
                                blurDataURL={card.blurHash || staticBlurDataUrl()}
                                priority={card.img_id <= 1 ? true : false}
                            />
                            <div className={`${styles['container-overlay-proyects-card']}`} />
                        </div>
                    )
                })
            }
        </>
    )
}