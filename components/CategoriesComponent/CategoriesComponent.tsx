import styles from './CategoriesComponent.module.scss'
import data from '@/models/es.json'
import CategoriesCardComponent from '../CategoriesCardComponent/CategoriesCardComponent'

export default function CategoriesComponent() {
    return (
        <section id={data.categories.sectionLink} className={styles['container-section-categories']}>
            <div className={styles['container-header-categories']}>
                <p className={styles['categories-title']}>{data.categories.title}</p>
                <span>{data.categories.subtitle}</span>
            </div>
            <div className={styles['container-cards-categories']}>
                <CategoriesCardComponent imagesData={data.categories.images} />
            </div>
        </section>
    )
}