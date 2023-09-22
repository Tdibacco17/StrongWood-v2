'use client'
import FurnitureTableComponent from "@/components/FurnitureTableComponent/FurnitureTableComponent";
import { ImgDataInterface } from "@/types";
import { FurnitureDataCardsInterface, FurnitureTableInterface } from "@/types/design";
import { useRef } from "react";

export default function FurnitureTableContainer({
    table,
    tableId,
    tableTitle,
    handleImageClick
}: {
    table: FurnitureTableInterface,
    tableId: number,
    tableTitle: string,
    handleImageClick: (image: FurnitureDataCardsInterface, tableId: number, tableTitle: string,) => void
}) {

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
    />
}