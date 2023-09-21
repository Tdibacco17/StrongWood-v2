import { ImgDataInterface } from '@/types'
import styles from './FurnitureCardComponent.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { DesignCategorieInterface } from '@/types/design'
//FALTAN IMAGENES BLURS
export default function FurnitureCardComponent({
    designKey,
    imageData,
}: {
    designKey: DesignCategorieInterface,
    imageData: ImgDataInterface,
}) {
    return (
        <div className={styles["container-section-card-categorie-style"]}>
            <div className={styles['container-outer-categorie-style-image']}>
                {/* <Image
                    className={`${styles['container-inner-categorie-style-image']}`}
                    src={imageData.imgSrc}
                    alt={imageData.imgAlt}
                    fill
                    sizes='(max-width: 1024px) 75vw, (max-width: 768px) 35vw,(max-width: 442px) 33vw, 100vw'
                    priority
                    // placeholder='blur'
                    // blurDataURL={imageData.imgBlur}
                /> */}
            </div>
            <div className={styles["container-overlay-image"]}>
                <p className={styles["title-overlay"]}>{imageData.imgAlt}</p>
            </div>
        </div>
    )
}