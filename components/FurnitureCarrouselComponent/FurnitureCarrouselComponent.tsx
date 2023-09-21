import { ImgDataInterface } from '@/types'
import styles from './FurnitureCarrouselComponent.module.scss'
import { DesignCategorieInterface } from '@/types/design'
import FurnitureCardComponent from '../FurnitureCardComponent/FurnitureCardComponent'

export default function FurnitureCarrouselComponent({
    carouselRef,
    imagesData,
}: {
    carouselRef: React.RefObject<HTMLDivElement>,
    imagesData: ImgDataInterface[],
}) {
    return (
        <div className={styles['container-section-carousel-furniture']}>
            <div className={styles['carousel-furniture']} ref={carouselRef}>
                {
                    imagesData.map((imageData: ImgDataInterface) => {
                        return <FurnitureCardComponent
                            key={imageData.img_id}
                            imageData={imageData}
                        />
                    })
                }
            </div>
        </div>
    )
}