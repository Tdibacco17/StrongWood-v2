'use client'
import { ProductDataInterface, ProductsDataContextInterface } from "@/types/products"
import { ReactNode, createContext, useState } from "react";

export const ProductsContext = createContext<ProductsDataContextInterface | {}>({});

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
    const [productsData, setProductsData] = useState<ProductDataInterface>({});

    const handleProductDataChange = (productData: ProductDataInterface) => {
        setProductsData(productData);
    };

    return (
        <ProductsContext.Provider
            value={{ productsData, handleProductDataChange }}
        >
            {children}
        </ProductsContext.Provider>
    );
};
