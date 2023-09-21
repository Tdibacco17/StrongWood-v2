'use client'
import FurnitureTableComponent from "@/components/FurnitureTableComponent/FurnitureTableComponent";
import { DesignCategorieInterface, FurnitureTableInterface } from "@/types/design";
import { useRef } from "react";

export default function FurnitureTableContainer({
    designKey,
    table,
}: {
    designKey: DesignCategorieInterface,
    table: FurnitureTableInterface,
}) {
    console.log("[TABLE-ITEM]: ", table)

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
        designKey={designKey}
        table={table}
        carouselRef={carouselRef}
        handleScrollLeft={handleScrollLeft}
        handleScrollRight={handleScrollRight}
    />
}