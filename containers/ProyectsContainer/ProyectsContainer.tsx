'use client'
import ProyectsComponent from "@/components/ProyectsComponent/ProyectsComponent";
import { useRef } from "react";

export default function ProyectsContainer() {
    const carouselRef = useRef<HTMLDivElement>(null);

    const handleScrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -448,
                behavior: 'smooth',
            });
        }
    };

    const handleScrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: 448,
                behavior: 'smooth',
            });
        }
    };

    return <ProyectsComponent
        carouselRef={carouselRef}
        handleScrollLeft={handleScrollLeft}
        handleScrollRight={handleScrollRight}
    />;
}