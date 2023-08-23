'use client'
import ProductDetailComponent from "@/components/ProductDetailComponent/ProductDetailComponent";
import { ProductDetailContext } from "@/context/ProductDetailProvider";
import { ProductsDataContextInterface } from "@/types/products";
import { useContext, useEffect } from "react";
import { productsData } from '@/models/products'

export default function ProductDetailContainer({ params }: { params: { slug: string } }) {
    const { handleProductDataChange } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface;

    useEffect(() => {
        if (params.slug) {
            handleProductDataChange(productsData[params.slug]);
        }
    }, [params.slug]);

    return <ProductDetailComponent />
}