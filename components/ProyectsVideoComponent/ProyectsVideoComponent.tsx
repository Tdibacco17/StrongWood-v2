import Image from 'next/image';
import styles from './ProyectsVideoComponent.module.scss';
import { ImgDataInterface } from '@/types';

export default function ProyectsVideoComponent({ imgData }: { imgData: ImgDataInterface }) {
    return (
        <div className={styles['container-outer-proyects-video']}>
            <Image
                src={imgData.imgSrc}
                alt={imgData.imgAlt}
                fill
                quality={100}
                style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
            <div className={styles['container-overlay-proyects-video']}/>
        </div>
    )
}