import { ImgDataInterface } from '@/types'
import styles from './FurnitureCardComponent.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { DesignCategorieInterface, FurnitureDataCardsInterface } from '@/types/design'
//FALTAN IMAGENES BLURS
export default function FurnitureCardComponent({
    imageData,
    tableId,
    handleImageClick
}: {
    imageData: FurnitureDataCardsInterface,
    tableId: number,
    handleImageClick: (image: FurnitureDataCardsInterface, tableId: number) => void

}) {
    return (
        <div onClick={() => handleImageClick(imageData, tableId)} className={styles["container-section-card-furniture"]}>
            <div className={styles['container-outer-furniture-image']}>
                <Image
                    className={`${styles['container-inner-furniture-image']}`}
                    src={imageData.imgSrc}
                    alt={imageData.imgAlt}
                    fill
                    sizes='(max-width: 1024px) 75vw, (max-width: 768px) 35vw,(max-width: 442px) 33vw, 100vw'
                    priority
                // placeholder='blur'
                // blurDataURL={imageData.imgBlur}
                />
            </div>
            <div className={styles["container-overlay-image"]}>
                <p className={styles["title-overlay"]}>{imageData.imgAlt}</p>
            </div>
        </div>
    )
}