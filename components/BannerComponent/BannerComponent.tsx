import Image from 'next/image'
import styles from './BannerComponent.module.scss'
import data from '@/models/es.json'

export default function BannerComponent() {
    return (
        <section id={data.banner.sectionLink} className={styles['container-outer-banner-image']}>
            <Image
                className={styles['container-inner-banner-image']}
                src={data.banner.image.imgSrc}
                alt={data.banner.image.imgAlt}
                fill
                sizes='100vw'
                priority
                quality={100}
            />
        </section>
    )
}