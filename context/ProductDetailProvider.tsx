'use client'
import { PaymentMethodInterface } from '@/types';
import { ProductInterface, ProductsDataContextInterface } from '@/types/products';
import { ReactNode, createContext, useState } from "react";

export const ProductDetailContext = createContext<ProductsDataContextInterface | {}>({});

export const ProductDetailProvider = ({ children, }: { children: ReactNode; }) => {
    const [productData, setProductData] = useState<ProductInterface | undefined>(undefined);

    const handleProductDataChange = (productData: ProductInterface) => {
        setProductData(productData);
    };

    const [paymentMethod, setPaymentMethod] = useState<PaymentMethodInterface | undefined>(undefined)

    const handlePaymentMethod = (paymentMethod: PaymentMethodInterface) => {
        setPaymentMethod(paymentMethod);
    };

    return (
        <ProductDetailContext.Provider
            value={{
                productData, handleProductDataChange,
                paymentMethod, handlePaymentMethod
            }}
        >
            {children}
        </ProductDetailContext.Provider>
    );
};