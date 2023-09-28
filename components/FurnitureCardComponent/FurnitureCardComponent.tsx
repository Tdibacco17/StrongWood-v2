import styles from './FurnitureCardComponent.module.scss'
import Image from 'next/image'
import { FurnitureCardComponentProps } from '@/types/design'

//FALTAN IMAGENES BLURS
export default function FurnitureCardComponent({
    imageData,
    tableId,
    tableTitle,
    handleImageClick,
    isSelected,
    isMissingImage
}: FurnitureCardComponentProps) {
    return (
        <div id={`${imageData.img_id}`} onClick={() => handleImageClick(imageData, tableId, tableTitle)} className={`${styles["container-section-card-furniture"]}`}>
            <div className={`${styles['container-outer-furniture-image']} ${isSelected ? styles['img-selected'] : ""} ${isMissingImage ? styles['img-missing']: ""}`}>
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
                <p className={`${styles["title-overlay"]} ${isSelected ? styles['text-img-selected'] : ""}`}>{imageData.imgAlt}</p>
            </div>
            {isSelected && <div className={styles["clicked-image"]} />}
        </div >
    )
}