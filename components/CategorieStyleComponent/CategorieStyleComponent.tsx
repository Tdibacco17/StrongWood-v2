import { DesignCategorieInterface, SubCategorieDataInterface } from '@/types/design';
import CategorieStyleCardComponent from '../CategorieStyleCardComponent/CategorieStyleCardComponent';
import styles from './CategorieStyleComponent.module.scss';
import { designData } from '@/models/design'
import { ImgDataInterface } from '@/types';
import CarrouselCategorieStyleContainer from '@/containers/CarrouselCategorieStyleContainer/CarrouselCategorieStyleContainer';

export default function CategorieStyleComponent({ designKey }: { designKey: DesignCategorieInterface }) {
    return (
        <>
            {designData[designKey].subcategories.map((subcategorieTable: SubCategorieDataInterface) => {
                return <div key={subcategorieTable.subcategorie_slug} className={styles['container-table-categorie-style']}>
                    <p className={styles['title-table']}>{subcategorieTable.title}</p>
                    <p className={styles['subtitle-table']}>{subcategorieTable.subtitle}</p>
                    {/* CONTAINER */}
                    {/* <CarrouselCategorieStyleContainer /> */}
                    {/* <div className={styles['container-images-categorie-style']}>
                        {
                            subcategorieTable.images.map((imageData: ImgDataInterface) => {
                                return <CategorieStyleCardComponent
                                    key={imageData.img_id}
                                    imageData={imageData}
                                />
                            })
                        }
                    </div> */}
                </div>
            })}
        </>
    )
}