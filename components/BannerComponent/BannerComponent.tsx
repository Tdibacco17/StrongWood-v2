import Image from 'next/image'
import styles from './BannerComponent.module.scss'
import data from '@/models/es.json'

export default function BannerComponent() {
    return (
        <div id={data.homePage.link} className={styles['container-section-banner']}>
            <div className={styles['container-outer-banner-image']}>
                <div className={styles['container-inner-banner-image']}>
                    <Image
                        src={data.homePage.banner.imgSrc}
                        alt={data.homePage.banner.imgAlt}
                        fill
                        priority
                        quality={100}
                    />
                </div>
            </div>
        </div>
    )
}