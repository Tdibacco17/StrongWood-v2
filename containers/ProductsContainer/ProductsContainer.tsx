'use client'
import ProductsComponent from "@/components/ProductsComponent/ProductsComponent";
import { ProductsContext } from "@/context/ProductsConextProvider";
import { ProductsDataContextInterface } from "@/types";
import { useContext, useEffect } from "react";
import data from '@/models/products.json'

export default function ProductsContainer() {
    const { handleProductDataChange } = useContext(
        ProductsContext
    ) as ProductsDataContextInterface

    useEffect(() => {
        handleProductDataChange(data);
    }, []);

    return <ProductsComponent />
}