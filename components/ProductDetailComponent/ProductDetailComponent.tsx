import styles from './ProductDetailComponent.module.scss'
import { ProductDetailContext } from "@/context/ProductDetailProvider";
import { ProductsDataContextInterface } from "@/types/products";
import { useContext } from "react";
import ProductDetailGalleryContainer from '@/containers/ProductDetailGalleryContainer/ProductDetailGalleryContainer';
import LoadingComponent from '../LoadingComponent/LoadingComponent';

export default function ProductDetailComponent() {
    const { productData } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface;

    return (
        <div className={styles['container-section-product-detail']}>
            <div className={styles['wrapper-header-product-detail']}>
                {productData && <>
                    <ProductDetailGalleryContainer />
                    <div className={styles['container-info-product-detail']}>
                        <p className={styles['product-title']}>{productData?.title}</p>
                        <div className={styles['container-buttons-prices']}>
                            <div className={styles['container-prices-product-detail']}>
                                <p>{productData.details.payment.cash.title}</p>
                                <p>{productData.details.payment.cash.price}</p>
                                <p>{productData.details.payment.cash.offerPrice}</p>
                                <p>{productData.details.payment.cash.offerPercentage}</p>
                            </div>
                            <div className={styles['container-prices-product-detail']}>
                                <p>{productData.details.payment.card.title}</p>
                                <p>{productData.details.payment.card.offerPrice}</p>
                            </div>
                        </div>
                    </div>
                </>}
                {!productData && <div className={styles['container-loader']}><LoadingComponent /></div>}
            </div>
            <div className={styles['description-product-detail']}>
                <p className={styles['title-description']}>{productData?.details.description.title}</p>
                <div className={styles['info-wrapper']}>
                    {productData?.details.description.itemsDescription.map((text: string, index: number) => {
                        return <p key={index} className={styles['info-description']}>{text}</p>
                    })}
                    {productData?.details.description.measures &&
                        <p className={styles['info-description']}>{productData.details.description.measures}</p>}
                </div>
            </div>
        </div>
    )
}