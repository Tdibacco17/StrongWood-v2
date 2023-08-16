import styles from './ProyectsComponent.module.scss'
import data from '@/models/es.json'
import ProyectsCardComponent from '../ProyectsCardComponent/ProyectsCardComponent'
import { ArrowLeftIconComponent, ArrowRightIconComponent } from '../IconComponent/IconComponent';
import { ImgDataInterface } from '@/types';

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
            <div className={styles['container-header-proyects']}>
                <p className={styles['proyects-title']}>{data.projects.title}</p>
                <p className={styles['proyects-subtitle']}>{data.projects.subtitle}</p>
            </div>
            <div className={styles['container-carousel']}>
                <div className={styles['container-cards-proyects']} ref={carouselRef}>
                    {
                        data.projects.cards.map((card: ImgDataInterface) => {
                            return <ProyectsCardComponent imageData={card} key={card.img_id} />
                        })
                    }
                </div>
                <div className={styles['container-carousel-btns']}>
                    <button
                        type='button'
                        aria-label='Boton izquierda'
                        className={styles['carousel-btn-arrow']}
                        onClick={handleScrollLeft}>
                        <ArrowLeftIconComponent fill={'white'} height={30} width={30} />
                    </button>
                    <button
                        type='button'
                        aria-label='Boton derecha'
                        className={styles['carousel-btn-arrow']}
                        onClick={handleScrollRight}>
                        <ArrowRightIconComponent fill={'white'} height={30} width={30} />
                    </button>
                </div>
            </div>
        </section>
    )
}