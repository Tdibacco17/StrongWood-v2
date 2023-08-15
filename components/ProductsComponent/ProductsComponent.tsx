import styles from './ProductsComponent.module.scss'
import { productsData } from '@/models/products'
import ProductCardComponent from '../ProductCardComponent/ProductCardComponent'
import dynamicBlurDataUrl from '@/utils/blur/dynamicBlurDataUrl'
import { ProductInterface } from '@/types/products';

export default async function ProductsComponent() {
    const photosArray = await Promise.all(Object.keys(productsData).map(async (productKey) => {
        const product = productsData[productKey];
        const blurHash = await dynamicBlurDataUrl(product.image.imgSrc);
        return { ...product, image: { ...product.image, blurHash } };
    }));

    return (
        <div className={styles['container-section-products']}>
            {
                photosArray.map((product: ProductInterface) => {
                    return <ProductCardComponent
                        key={product.product_slug}
                        product={product}
                    />
                })
            }
        </div>
    )
}