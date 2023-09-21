import { ImgDataInterface } from '@/types'
import styles from './FurnitureCarrouselComponent.module.scss'
import { DesignCategorieInterface } from '@/types/design'
import FurnitureCardComponent from '../FurnitureCardComponent/FurnitureCardComponent'

export default function FurnitureCarrouselComponent({
    designKey,
    carouselRef,
    imagesData,
}: {
    designKey: DesignCategorieInterface,
    carouselRef: React.RefObject<HTMLDivElement>,
    imagesData: ImgDataInterface[],
}) {
    return (
        <div className={styles['container-section-carousel-categorie-style']}>
            <div className={styles['carousel-subcategories']} ref={carouselRef}>
                {
                    imagesData.map((imageData: ImgDataInterface) => {
                        return <FurnitureCardComponent
                            designKey={designKey}
                            key={imageData.img_id}
                            imageData={imageData}
                        />
                    })
                }
            </div>
        </div>
    )
}