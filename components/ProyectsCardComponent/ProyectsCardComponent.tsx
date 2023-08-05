import Image from 'next/image';
import styles from './ProyectsCardComponent.module.scss';
import { ImgDataInterface } from '@/types';

export default function ProyectsCardComponent({ imgData }: { imgData: ImgDataInterface }) {
    return (
        <div className={styles['container-outer-proyects-card']}>
            <Image
                src={imgData.imgSrc}
                alt={imgData.imgAlt}
                fill
                quality={100}
                style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
            <div className={styles['container-overlay-proyects-card']} />
        </div>
    )
}