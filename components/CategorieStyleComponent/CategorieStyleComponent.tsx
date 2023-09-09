import { DesignCategorieInterface, SubCategorieDataInterface } from '@/types/design';
import CategorieStyleCardComponent from '../CategorieStyleCardComponent/CategorieStyleCardComponent';
import styles from './CategorieStyleComponent.module.scss';
import { designData } from '@/models/design'
import { ImgDataInterface } from '@/types';

export default function CategorieStyleComponent({ designKey }: { designKey: DesignCategorieInterface }) {
    return (
        <div className={styles['container-section-categorie-style']}>
            <div key={designKey} className={styles['container-table-categorie-style']}>
                {designData[designKey].subcategories.map((subcategorieTable: SubCategorieDataInterface) => {
                    return <div key={subcategorieTable.subcategorie_slug}>
                        <p>{subcategorieTable.title}</p>
                        <p>{subcategorieTable.subtitle}</p>
                        {
                            subcategorieTable.images.map((imageData: ImgDataInterface) => {
                                return <CategorieStyleCardComponent
                                    key={imageData.img_id}
                                    imageData={imageData}
                                />
                            })
                        }
                    </div>
                })}
            </div>
        </div>
    )
}