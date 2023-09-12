'use client'
import CategorieStyleComponent from "@/components/CategorieStyleComponent/CategorieStyleComponent";
import { DesignCategorieInterface } from "@/types/design";
import { useRef } from "react";

export default function CategorieStyleContainer({ designKey }: { designKey: DesignCategorieInterface }) {
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
    return <CategorieStyleComponent
        designKey={designKey}
        carouselRef={carouselRef}
        handleScrollLeft={handleScrollLeft}
        handleScrollRight={handleScrollRight}
    />
}