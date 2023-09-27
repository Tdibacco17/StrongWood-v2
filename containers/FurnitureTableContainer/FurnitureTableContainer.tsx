'use client'
import FurnitureTableComponent from "@/components/FurnitureTableComponent/FurnitureTableComponent";
import { FurnitureTableContainerProps } from "@/types/design";
import { useRef } from "react";

export default function FurnitureTableContainer({
    table,
    tableId,
    tableTitle,
    handleImageClick,
    clickedImages,
    isMissingImage
}: FurnitureTableContainerProps) {

    const carouselRef = useRef<HTMLDivElement>(null);

    const handleScrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -425,
                behavior: 'smooth',
            });
        }
    };
    const handleScrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: 425,
                behavior: 'smooth',
            });
        }
    };

    return <FurnitureTableComponent
        table={table}
        tableId={tableId}
        tableTitle={tableTitle}
        carouselRef={carouselRef}
        handleScrollLeft={handleScrollLeft}
        handleScrollRight={handleScrollRight}
        handleImageClick={handleImageClick}
        clickedImages={clickedImages}
        isMissingImage={isMissingImage}
    />
}