import styles from './ProyectsComponent.module.scss'
import data from '@/models/es.json'
import ProyectsCardComponent from '../ProyectsCardComponent/ProyectsCardComponent'
import { GridPropsInterface } from '@/types';

export default function ProyectsComponent({
    isView,
    handleViewProyects
}: {
    isView: boolean,
    handleViewProyects: () => void
}) {
    return (
        <section id={data.homePage.projects.sectionLink} className={styles['container-section-proyects']}>
            <div className={styles['bg-proyects']}>
                <div className={styles['container-header-proyects']}>
                    <p className={styles['proyects-title']}>{data.homePage.projects.title}</p>
                    <p className={styles['proyects-subtitle']}>{data.homePage.projects.subtitle}</p>
                </div>
                <div className={`${styles['container-card-proyects']}`}>
                    <div className={`${styles['container-all-proyects']}`}>
                        {
                            !isView ? data.homePage.projects.cards.slice(0, 5).map((card: GridPropsInterface) => {
                                return <ProyectsCardComponent imageData={card} key={card.img_id} />
                            })
                                : data.homePage.projects.cards.map((card: GridPropsInterface) => {
                                    return <ProyectsCardComponent imageData={card} key={card.img_id} />
                                })
                        }
                    </div>
                </div>
                <p onClick={handleViewProyects} className={styles['btn-see-more']}>{!isView ? 'Ver mas' : 'Ver menos'}</p>
            </div>
        </section>
    )
}