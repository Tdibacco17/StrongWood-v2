import { ImgDataInterface } from '@/types'
import styles from './CategorieStyleCarrouselComponent.module.scss'
import { DesignCategorieInterface } from '@/types/design'
import CategorieStyleCardComponent from '../CategorieStyleCardComponent/CategorieStyleCardComponent'

export default function CategorieStyleCarrouselComponent({
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
                        return <CategorieStyleCardComponent
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