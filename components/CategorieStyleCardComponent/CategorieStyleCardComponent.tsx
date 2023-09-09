import Link from 'next/link'
import styles from './CategorieStyleCardComponent.module.scss'
import { ImgDataInterface } from '@/types'

export default function CategorieStyleCardComponent({ imageData }: { imageData: ImgDataInterface }) {
    return (
        <Link href={`/`} className={styles['container-outer-categorie-style-card']}>
            {JSON.stringify(imageData)}
        </Link>
    )
}