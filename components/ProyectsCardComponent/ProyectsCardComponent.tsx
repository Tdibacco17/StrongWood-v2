import Image from 'next/image';
import styles from './ProyectsCardComponent.module.scss';
import { ImgDataInterface } from '@/types';

export default function ProyectsCardComponent({ imgData }: { imgData: ImgDataInterface }) {
    return (
        <div className={`${styles['container-outer-proyects-card']}`}>
            <Image
                src={imgData.imgSrc}
                alt={imgData.imgAlt}
                fill
                sizes='(max-width: 442px) 85vw, 25rem'
                loading='lazy'
                quality={100}
                className={`${styles['container-inner-proyects-card']}`}
            />
            <div className={styles['container-overlay-proyects-video']} />
        </div>
    )
}