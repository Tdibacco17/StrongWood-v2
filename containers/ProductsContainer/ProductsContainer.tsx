'use client'
import ProductsComponent from "@/components/ProductsComponent/ProductsComponent";
import { ProductsContext } from "@/context/ProductsContextProvider";
import { ProductsDataContextInterface } from "@/types/products";
import { useContext, useEffect } from "react";
import { productsData } from '@/models/products'

export default function ProductsContainer() {
    const { handleProductDataChange } = useContext(
        ProductsContext
    ) as ProductsDataContextInterface

    useEffect(() => {
        handleProductDataChange(productsData)
    }, []);

    return <ProductsComponent />
}