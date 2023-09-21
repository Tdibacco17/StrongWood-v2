import { ImgDataInterface } from '@/types'
import styles from './FurnitureCarrouselComponent.module.scss'
import FurnitureCardComponent from '../FurnitureCardComponent/FurnitureCardComponent'
import { FurnitureDataCardsInterface } from '@/types/design'

export default function FurnitureCarrouselComponent({
    carouselRef,
    tableId,
    tableTitle,
    imagesData,
    handleImageClick
}: {
    carouselRef: React.RefObject<HTMLDivElement>,
    tableId: number,
    tableTitle: string,
    imagesData: FurnitureDataCardsInterface[],
    handleImageClick: (image: FurnitureDataCardsInterface, tableId: number, tableTitle: string,) => void
}) {
    return (
        <div className={styles['container-section-carousel-furniture']}>
            <div className={styles['carousel-furniture']} ref={carouselRef}>
                {
                    imagesData.map((imageData: FurnitureDataCardsInterface) => {
                        return <FurnitureCardComponent
                            key={imageData.img_id}
                            tableId={tableId}
                            tableTitle={tableTitle}
                            imageData={imageData}
                            handleImageClick={handleImageClick}
                        />
                    })
                }
            </div>
        </div>
    )
}