import styles from './CategoriesComponent.module.scss'
import data from '@/models/es.json'
import CategoriesCardComponent from '../CategoriesCardComponent/CategoriesCardComponent'
import { LinkImgDataInterface } from '@/types'

export default function CategoriesComponent() {
    return (
        <section id={data.categories.sectionLink} className={styles['container-section-categories']}>
            <p className={styles['categories-title']}>{data.categories.title}</p>
            <div className={styles['container-cards-categories']}>
                {
                    data.categories.images.map((card: LinkImgDataInterface) => {
                        return <CategoriesCardComponent imgData={card} key={card.img_id} />
                    })
                }
            </div>
        </section>
    )
}