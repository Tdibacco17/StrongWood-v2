import { ImgDataInterface } from "@/types";
import { useRef } from "react";

export default function CarrouselCategorieStyleContainer({
    imagesData,
    titleCategorie,
    subtitle
}: {
    imagesData: ImgDataInterface[];
    titleCategorie: string,
    subtitle: string
}) {

    const carouselRef = useRef<HTMLDivElement>(null);

    const handleScrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -475,
                behavior: 'smooth',
            });
        }
    };

    const handleScrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: 475,
                behavior: 'smooth',
            });
        }
    };

    return 
    // <DesignDetailCarouselComponent
    //     imagesData={imagesData}
    //     carouselRef={carouselRef}
    //     handleScrollLeft={handleScrollLeft}
    //     handleScrollRight={handleScrollRight}
    //     titleCategorie={titleCategorie}
    //     subtitle={subtitle}
    // />
}