import Image from 'next/image';
import styles from './ProyectsCardComponent.module.scss';
import { ImgDataInterface } from '@/types';

export default function ProyectsCardComponent({ imageData }: { imageData: ImgDataInterface }) {
    return (
        <div key={imageData.img_id} className={`${styles['container-outer-proyects-card']}`}>
            <Image
                src={imageData.imgSrc}
                alt={imageData.imgAlt}
                fill
                sizes='(max-width: 1024px) 75vw,(max-width: 992px) 50vw,(max-width: 768px) 35vw,(max-width: 442px) 33vw, 100vw'
                className={styles['container-inner-proyects-card']}
                placeholder='blur'
                blurDataURL={imageData.imgBlur}
            />
            <div className={styles['container-overlay-proyects-card']} />
        </div>
    )
}