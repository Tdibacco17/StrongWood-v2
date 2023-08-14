'use client'
import ProductDetailComponent from "@/components/ProductDetailComponent/ProductDetailComponent";
import { ProductDetailContext } from "@/context/ProductDetailProvider";
import { ProductsDataContextInterface } from "@/types";
import { useContext, useEffect } from "react";
import data from '@/models/products.json'

export default function ProductDetailContainer({ params }: { params: { slug: string } }) {
    const { handleProductDataChange } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface;

    useEffect(() => {
        handleProductDataChange(data[params.slug as keyof typeof data]);
    }, [params.slug]);

    return <ProductDetailComponent />
}