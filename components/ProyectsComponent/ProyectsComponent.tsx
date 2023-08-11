import styles from './ProyectsComponent.module.scss'
import data from '@/models/es.json'
import { ImgDataInterface } from '@/types'
import ProyectsCardComponent from '../ProyectsCardComponent/ProyectsCardComponent'
import { ArrowLeftIconComponent, ArrowRightIconComponent } from '../IconComponent/IconComponent';

export default function ProyectsComponent({
    carouselRef,
    handleScrollLeft,
    handleScrollRight,
}: {
    carouselRef: React.RefObject<HTMLDivElement>;
    handleScrollLeft: () => void,
    handleScrollRight: () => void,
}) {
    return (
        <section id={data.projects.sectionLink} className={styles['container-section-proyects']}>
            <p className={styles['proyects-title']}>{data.projects.title}</p>
            <div className={styles['container-carousel']}>
                <div className={styles['container-cards-proyects']} ref={carouselRef}>
                    {
                        data.projects.cards.map((card: ImgDataInterface) => {
                            return <ProyectsCardComponent imgData={card} key={card.img_id} />
                        })
                    }
                </div>
                <div className={styles['container-carousel-btns']}>
                    <button
                        className={styles['btn-arrow']}
                        onClick={handleScrollLeft}>
                        <ArrowLeftIconComponent fill={'white'} height={30} width={30} />
                    </button>
                    <button
                        className={styles['btn-arrow']}
                        onClick={handleScrollRight}>
                        <ArrowRightIconComponent fill={'white'} height={30} width={30} />
                    </button>
                </div>
            </div>
        </section>
    )
}