import { FurnitureTableComponentProps } from '@/types/design'
import { ArrowLeftIconComponent, ArrowRightIconComponent } from '../IconComponent/IconComponent'
import styles from './FurnitureTableComponent.module.scss'
import FurnitureCarrouselComponent from '../FurnitureCarrouselComponent/FurnitureCarrouselComponent'

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
}: FurnitureTableComponentProps) {
    return (
        <div className={`${styles['container-section-furniture-table']}`}>
            <div className={styles['container-header-table']}>
                <div className={styles['container-titles-header-table']}>
                    <p className={styles['title-table']}>{table.title}</p>
                    {table.maxSelections === 1 ?
                        <p className={styles['subtitle-table']}>Mínimo elegir 1 opción <small className={styles['isRequired']}>*</small></p>
                        : <p className={styles['subtitle-table']}>Mínimo elegir 1 opción <small className={styles['isRequired']}>*</small> ,máximo {table.maxSelections}</p>}
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
                isMissingImage={isMissingImage}
            />
            {isMissingImage &&
                <p className={styles['text-error-custom']}>FALTA COMPLETAR ESTE CAMPO</p>}
        </div>
    )
}