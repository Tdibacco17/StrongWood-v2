import styles from './ProductsComponent.module.scss'
import { productsData } from '@/models/products'
import ProductCardComponent from '../ProductCardComponent/ProductCardComponent'
import dynamicBlurDataUrl from '@/utils/blur/dynamicBlurDataUrl'
import { ProductInterface } from '@/types/products';

export default async function ProductsComponent() {
    const photosArray = Object.keys(productsData).map(async (productKey) => ({
        ...productsData[productKey],
        image: {
            ...productsData[productKey].image,
            blurHash: await dynamicBlurDataUrl(productsData[productKey].image.imgSrc)
        }
    }))
    const photos = await Promise.all(photosArray)

    return (
        <div className={styles['container-section-products']}>
            {
                photos.map((product: ProductInterface) => {
                    return <ProductCardComponent
                        key={product.product_slug}
                        product={product}
                    />
                })
            }
        </div>
    )
}