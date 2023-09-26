import { DesignCategorieInterface, FurnitureDataCardsInterface, FurnitureTableInterface } from '@/types/design'
import { ArrowLeftIconComponent, ArrowRightIconComponent } from '../IconComponent/IconComponent'
import styles from './FurnitureTableComponent.module.scss'
import FurnitureCarrouselComponent from '../FurnitureCarrouselComponent/FurnitureCarrouselComponent'
import { ImgDataInterface } from '@/types'

export default function FurnitureTableComponent({
    table,
    tableId,
    tableTitle,
    carouselRef,
    handleScrollLeft,
    handleScrollRight,
    handleImageClick,
    clickedImages,
    isMissingImage
}: {
    table: FurnitureTableInterface,
    tableId: number,
    tableTitle: string,
    carouselRef: React.RefObject<HTMLDivElement>,
    handleScrollLeft: () => void,
    handleScrollRight: () => void,
    handleImageClick: (image: FurnitureDataCardsInterface, tableId: number, tableTitle: string,) => void,
    clickedImages: { tableId: number, tableTitle: string, images: string[] }[],
    isMissingImage: boolean
}) {
    return (
        <div className={`${styles['container-section-furniture-table']}`}>
            <div className={styles['container-header-table']}>
                <div className={styles['container-titles-header-table']}>
                    <p className={styles['title-table']}>{table.title}</p>
                    <p className={styles['subtitle-table']}>{table.maxSelections === 1 ?
                        `Mínimo elegir 1 opción`
                        : `Mínimo elegir 1 opción, máximo ${table.maxSelections}`}</p>
                </div>
                <div className={styles['container-carousel-btns']}>
                    <button
                        type='button'
                        aria-label='Boton izquierda'
                        className={`${styles['carousel-btn-arrow']} ${styles['left']}`}
                        onClick={handleScrollLeft}>
                        <ArrowLeftIconComponent fill={'white'} height={30} width={30} />
                    </button>
                    <button
                        type='button'
                        aria-label='Boton derecha'
                        className={`${styles['carousel-btn-arrow']} ${styles['right']}`}
                        onClick={handleScrollRight}>
                        <ArrowRightIconComponent fill={'white'} height={30} width={30} />
                    </button>
                </div>
            </div>
            <FurnitureCarrouselComponent
                tableId={tableId}
                tableTitle={tableTitle}
                carouselRef={carouselRef}
                imagesData={table.cards}
                handleImageClick={handleImageClick}
                clickedImages={clickedImages}
            />
            {isMissingImage && <div className={styles['tableStyle']} />}
        </div>
    )
}