import { ImgDataInterface } from '@/types'
import styles from './FurnitureCarrouselComponent.module.scss'
import FurnitureCardComponent from '../FurnitureCardComponent/FurnitureCardComponent'
import { FurnitureDataCardsInterface } from '@/types/design'

export default function FurnitureCarrouselComponent({
    carouselRef,
    tableId,
    tableTitle,
    imagesData,
    handleImageClick,
    clickedImages
}: {
    carouselRef: React.RefObject<HTMLDivElement>,
    tableId: number,
    tableTitle: string,
    imagesData: FurnitureDataCardsInterface[],
    handleImageClick: (image: FurnitureDataCardsInterface, tableId: number, tableTitle: string,) => void,
    clickedImages: { tableId: number, tableTitle: string, images: string[] }[],
}) {
    // Función para verificar si una imagen está seleccionada
    const isImageSelected = (imageData: FurnitureDataCardsInterface) => {
        // Buscar la tabla actual en clickedImages
        const currentTable = clickedImages.find(item => item.tableId === tableId);
        // Verificar si la imagen actual (por su title_slug) está en la lista de imágenes de la tabla actual
        return currentTable?.images.includes(imageData.title_slug) || false;
    };

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
                            isSelected={isImageSelected(imageData)}
                        />
                    })
                }
            </div>
        </div>
    )
}