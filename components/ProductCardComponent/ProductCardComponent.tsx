import { ProductInterface } from '@/types/products';
import styles from './ProductCardComponent.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCardComponent({ product }: { product: ProductInterface }) {
    return (
        <Link href={`/productos/${product.product_slug}`} className={styles['container-product-card']}>
            <div className={styles['container-outer-product-card']}>
                <Image
                    src={product.image.imgSrc}
                    alt={product.image.imgAlt}
                    quality={75}
                    height={275}
                    width={275}
                    sizes='275px, (max-width:442px) 225px'
                    className={styles['container-inner-product-card']}
                    placeholder='blur'
                    blurDataURL={product.image.imgBlur}
                    priority={product.image.img_id <= 1 ? true : false}
                />
                <div className={styles['container-overlay-product-card']} />
            </div>
            <div className={styles['container-info-product']}>
                <p className={styles['product-title']}>{product.title}</p>
                <div className={styles['container-info-price']}>
                    {product.price && <p className={styles['product-price']}>{product.price}</p>}
                    <p className={styles['product-offerprice']}>{product.offerPrice}</p>
                </div>
            </div>
        </Link>
    )
}