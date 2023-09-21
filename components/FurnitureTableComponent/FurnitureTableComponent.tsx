import { DesignCategorieInterface, FurnitureTableInterface } from '@/types/design'
import { ArrowLeftIconComponent, ArrowRightIconComponent } from '../IconComponent/IconComponent'
import styles from './FurnitureTableComponent.module.scss'
import FurnitureCarrouselComponent from '../FurnitureCarrouselComponent/FurnitureCarrouselComponent'

export default function FurnitureTableComponent({
    table,
    carouselRef,
    handleScrollLeft,
    handleScrollRight,
}: {
    table: FurnitureTableInterface
    carouselRef: React.RefObject<HTMLDivElement>,
    handleScrollLeft: () => void,
    handleScrollRight: () => void,
}) {
    return (
        <div className={styles['container-section-furniture-table']}>
            <div className={styles['container-header-table']}>
                <div>
                    <p className={styles['title-table']}>TITULO</p>
                    <p className={styles['subtitle-table']}>SUB TITULO</p>
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
                carouselRef={carouselRef}
                imagesData={table.cards}
            />
        </div>
    )
}