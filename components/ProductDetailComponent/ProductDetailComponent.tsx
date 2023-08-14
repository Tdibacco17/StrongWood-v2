import styles from './ProductDetailComponent.module.scss'
import { ProductDetailContext } from "@/context/ProductDetailProvider";
import { ProductsDataContextInterface } from "@/types";
import { useContext } from "react";

export default function ProductDetailComponent() {
    const { productData } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface;

    return (
        <div className={styles['container-section-product-detail']}>
            {JSON.stringify(productData)}
        </div>
    )
}