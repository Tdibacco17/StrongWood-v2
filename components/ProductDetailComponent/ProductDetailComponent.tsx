import styles from './ProductDetailComponent.module.scss'
import { ProductDetailContext } from "@/context/ProductDetailProvider";
import { ProductsDataContextInterface } from "@/types/products";
import { useContext } from "react";
import ProductDetailGalleryContainer from '@/containers/ProductDetailGalleryContainer/ProductDetailGalleryContainer';
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import ProductDetailInfoComponent from '../ProductDetailInfoComponent/ProductDetailInfoComponent';

export default function ProductDetailComponent() {
    const { productData } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface;

    return (
        <div className={styles['container-section-product-detail']}>
            {productData ?
                <>
                    <div className={styles['container-card-prodcut-detail']}>
                        <div className={styles['wrapper-header-product-detail']}>
                            <ProductDetailGalleryContainer />
                        </div>
                        <ProductDetailInfoComponent />
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
                </>
                : <div className={styles['container-loader']}>
                    <div className={styles['position-loader']}>
                        <LoadingComponent />
                    </div>
                </div>}
        </div>
    )
}