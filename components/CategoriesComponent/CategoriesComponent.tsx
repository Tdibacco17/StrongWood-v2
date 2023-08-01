import styles from './CategoriesComponent.module.scss'
import data from '@/models/es.json'
import CategoriesCardComponent from '../CategoriesCardComponent/CategoriesCardComponent'
import { ImgDataInterface } from '@/types'

export default function CategoriesComponent() {
    return (
        <section id={data.categories.scrollLink} className={styles['container-section-categories']}>
            <p className={styles['categories-title']}>{data.categories.title}</p>
            <div className={styles['container-cards-categories']}>
                {
                    data.categories.images.map((card: ImgDataInterface) => {
                        return <CategoriesCardComponent imgData={card} key={card.imgId}/>
                    })
                }
            </div>
        </section>
    )
}