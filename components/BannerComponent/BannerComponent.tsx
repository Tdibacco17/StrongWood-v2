import Image from 'next/image'
import styles from './BannerComponent.module.scss'
import data from '@/models/es.json'

export default function BannerComponent() {
    return (
        <div className={styles['container-section-banner']}>
            <div className={styles['container-outer-banner-image']}>
                <div className={styles['container-inner-banner-image']}>
                    <Image
                        src={data.banner.imgSrc}
                        alt={data.banner.imgAlt}
                        fill
                        priority
                        quality={75}
                    />
                </div>
            </div>
        </div>
    )
}