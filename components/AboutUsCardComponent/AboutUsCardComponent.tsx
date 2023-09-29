import { AboutUscardInterface } from '@/types'
import styles from './AboutUsCardComponent.module.scss'
import Image from 'next/image'

export default  function AboutUsCardComponent({ cardData }: { cardData: AboutUscardInterface }) {
    return (
        <div className={`${styles['container-aboutus-wrapper-card']} ${cardData.isReverse ? styles['isReverse'] : ""}`}>
            <div className={styles['container-outer-card-image']}>
                <Image
                    src={cardData.image.imgSrc}
                    alt={cardData.image.imgAlt}
                    fill
                    sizes='100vw, (max-width: 442px) 32vw, (max-width: 768px) 35vw, (max-width: 1024px) 75vw'
                    className={styles['container-inner-card-image']}
                    placeholder='blur'
                    blurDataURL={cardData.image.imgBlur}
                />
            </div>
            <div className={styles['container-info-card']}>
                <p className={`${styles['info-card-title']} ${cardData.isReverse ? styles['isReverse'] : ""}`}>{cardData.text.title}</p>
                <p className={`${styles['info-card-description']} ${cardData.isReverse ? styles['isReverse'] : ""}`}>{cardData.text.description}</p>
            </div>
        </div>
    )
}