import { ProductInterface } from '@/types/products';
import styles from './ProductCardComponent.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCardComponent({ product }: { product: ProductInterface }) {
    return (
        <Link href={`/productos/${product.product_slug}`} className={styles['container-outer-product-card']}>
            <Image
                src={product.image.imgSrc}
                alt={product.image.imgAlt}
                quality={100}
                height={225}
                width={225}
                className={styles['container-inner-product-card']}
                placeholder='blur'
                blurDataURL={product.image.blurHash}
                style={{ height: 'auto', width: '100%' }}
            />
        </Link>
    )
}