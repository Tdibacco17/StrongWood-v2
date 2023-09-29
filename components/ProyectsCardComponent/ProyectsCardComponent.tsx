import Image from 'next/image';
import styles from './ProyectsCardComponent.module.scss';
import { GridPropsInterface, ImgDataInterface } from '@/types';

// function getRandomHeight(min: number, max: number) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

export default function ProyectsCardComponent({ imageData }: { imageData: GridPropsInterface }) {
    return (
        <div key={imageData.img_id} className={`${styles['proyectos-outer-image']}`}
        /* style={{ gridRow: `span ${imageData.imgSpan ? imageData.imgSpan : getRandomHeight(2, 5)}` }} */>
            <Image
                src={imageData.imgSrc}
                alt={imageData.imgAlt}
                fill
                sizes='(max-width: 1024px) 75vw,(max-width: 992px) 50vw,(max-width: 768px) 35vw,(max-width: 442px) 33vw, 100vw'
                className={styles['proyectos-inner-image']}
                placeholder='blur'
                blurDataURL={imageData.imgBlur}
            />
            <div className={styles['container-overlay-proyects-card']} />
        </div>
    )
}