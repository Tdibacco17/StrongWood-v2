'use client'
import ProductDetailGalleryComponent from "@/components/ProductDetailGalleryComponen/ProductDetailGalleryComponent";
import { ProductDetailContext } from "@/context/ProductDetailProvider";
import { ImgDataInterface } from "@/types";
import { ProductsDataContextInterface } from "@/types/products";
import { useWindowSize } from "@/utils/size/useWindowSize";
import {  useContext, useRef, useState } from "react";

export default function ProductDetailGalleryContainer() { 
    const { productData } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface;

    const { width } = useWindowSize()
    const carouselRef = useRef<HTMLDivElement>(null);

    const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

    const handleImageClick = (index: number) => {
        setActiveImageIndex(index);
    };

    const activeImage: ImgDataInterface | undefined = productData?.details?.images?.[activeImageIndex];


    const handleScrollUp = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                top: -325,
                behavior: "smooth",
            });
        }
    };

    const handleScrollDown = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                top: 325,
                behavior: "smooth",
            });
        }
    };

    const handleScrollLeft = () => {
        if (width < 768 && carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -325,
                behavior: 'smooth',
            });
        }
    };

    const handleScrollRight = () => {
        if (width < 768 && carouselRef.current) {
            carouselRef.current.scrollBy({
                left: 325,
                behavior: 'smooth',
            });
        }
    };

    return <ProductDetailGalleryComponent
        width={width}
        handleScrollUp={handleScrollUp}
        handleScrollDown={handleScrollDown}
        handleScrollLeft={handleScrollLeft}
        handleScrollRight={handleScrollRight}
        activeImage={activeImage}
        carouselRef={carouselRef}
        handleImageClick={handleImageClick}
    />
}