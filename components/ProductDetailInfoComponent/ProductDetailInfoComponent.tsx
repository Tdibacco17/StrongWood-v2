import { ProductsDataContextInterface } from '@/types/products';
import styles from './ProductDetailInfoComponent.module.scss';
import { ProductDetailContext } from '@/context/ProductDetailProvider';
import { useContext } from 'react';
import { CreditCardIconComponent, WalletIconComponent } from '../IconComponent/IconComponent';

export default function ProductDetailInfoComponent() {
    const { productData } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface;
    return (
        <div className={styles['container-section-info-product-detail']}>
            <div className={styles['container-section-old-prices']}>
                <p className={styles['product-title']}>{productData?.title}</p>
                {productData.price && <p className={styles['old']}>Precio: {productData.price}</p>}
                <p className={styles['new']}>
                    {productData.price ?
                        `Precio en oferta: ${productData.offerPrice}`
                        : `Precio: ${productData.offerPrice}`}
                </p>
            </div>
            <div className={styles['container-section-buttons-prices']}>
                <div className={styles['wrapper-btns-prices']}>
                    <div className={styles['info-wallet']}>
                        <p>{productData.details.payment.cash.title}</p>
                        <p className={styles['percentage']}>{productData.details.payment.cash.offerPercentage}</p>
                    </div>
                    <button
                        type='button'
                        aria-label={`${productData.details.payment.cash.title}`}
                        className={styles['container-btn-prices']}>
                        <WalletIconComponent fill={'white'} height={30} width={30} />
                        <p>{productData.details.payment.cash.offerPrice}</p>
                    </button>
                </div>
                <div className={styles['wrapper-btns-prices']}>
                    <p>{productData.details.payment.card.title}</p>
                    <button
                        type='button'
                        aria-label={`${productData.details.payment.card.title}`}
                        className={styles['container-btn-prices']}>
                        <CreditCardIconComponent fill={'white'} height={30} width={30} />
                        <p>{productData.details.payment.card.offerPrice}</p>
                    </button>
                </div>
            </div>
        </div>
    )
}