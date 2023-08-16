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
        handleProductDataChange(productsData[params.slug as keyof typeof productsData]);
    }, [params.slug]);

    return <ProductDetailComponent />
}