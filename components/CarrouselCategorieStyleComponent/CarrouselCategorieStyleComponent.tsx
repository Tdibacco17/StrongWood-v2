import { ImgDataInterface } from '@/types'
import styles from './CarrouselCategorieStyleComponent.module.scss'
import CarrouselCategorieStyleCardComponent from '../CarrouselCategorieStyleCardComponent/CarrouselCategorieStyleCardComponent'
import { DesignCategorieInterface } from '@/types/design'

export default function CarrouselCategorieStyleComponent({
    designKey,
    carouselRef,
    imagesData
}: {
    designKey: DesignCategorieInterface,
    carouselRef: React.RefObject<HTMLDivElement>,
    imagesData: ImgDataInterface[]
}) {
    return (
        <div className={styles['container-section-carousel-categorie-style']}>
            <div className={styles['carousel-subcategories']} ref={carouselRef}>
                {
                    imagesData.map((imageData: ImgDataInterface) => {
                        return <CarrouselCategorieStyleCardComponent
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