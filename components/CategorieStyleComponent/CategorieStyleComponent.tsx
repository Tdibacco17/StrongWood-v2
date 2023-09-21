import { DesignCategorieInterface, SubCategorieDataInterface } from '@/types/design';
import styles from './CategorieStyleComponent.module.scss';
import { designData } from '@/models/design'
import { ArrowLeftIconComponent, ArrowRightIconComponent } from '../IconComponent/IconComponent';
import CategorieStyleCarrouselComponent from '../CategorieStyleCarrouselComponent/CategorieStyleCarrouselComponent';

export default function CategorieStyleComponent({
    designKey,
    carouselRef,
    handleScrollLeft,
    handleScrollRight,
}: {
    designKey: DesignCategorieInterface,
    carouselRef: React.RefObject<HTMLDivElement>,
    handleScrollLeft: () => void,
    handleScrollRight: () => void,
}) {
    return (
        <>
            {designData[designKey].subcategories.map((subcategorieTable: SubCategorieDataInterface) => {
                return <div key={subcategorieTable.subcategorie_slug} className={styles['container-table-categorie-style']}>
                    <div className={styles['container-header-table']}>
                        <div>
                            <p className={styles['title-table']}>{subcategorieTable.title}</p>
                            <p className={styles['subtitle-table']}>{subcategorieTable.subtitle}</p>
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
                    <CategorieStyleCarrouselComponent
                        designKey={designKey}
                        carouselRef={carouselRef}
                        imagesData={subcategorieTable.images}
                    />
                </div>
            })}
        </>
    )
}