'use client'
import { designData } from '@/models/design'
import { useContext, useEffect, useState } from "react";
import { DesignCategorieInterface, FurnitureDataCardsInterface, FurnitureDataContextInterface } from "@/types/design";
import { ImgDataInterface } from '@/types';
import FurnitureComponent from '@/components/FurnitureComponent/FurnitureComponent';
import { FurnitureDetailContext } from '@/context/FurnitureDetailProvider';

export default function FurnitureContainer({
    designKey,
    params,
    isGeneric
}: {
    designKey: DesignCategorieInterface,
    params: { slug: string },
    isGeneric: boolean
}) {
    const { furnitureData, handleFurnitureDataChange } = useContext(
        FurnitureDetailContext
    ) as FurnitureDataContextInterface

    useEffect(() => {
        const selectedDesignData = isGeneric ? designData['cocinas'].details.tables['generic'] : designData['cocinas'].details.tables[params.slug];
        handleFurnitureDataChange({
            tables: selectedDesignData,
            measures: designData['cocinas'].details.measures
        });
    }, [params.slug, isGeneric]);

    const [visibleTables, setVisibleTables] = useState<number[]>([1]);
    const [clickedImageSlugs, setClickedImageSlugs] = useState<string[]>([]);

    const handleImageClick = (image: FurnitureDataCardsInterface, tableId: number) => {
        // Verificamos si la imagen ya está en el array clickedImageSlugs
        const nextTableId = tableId + 1;
        if (!visibleTables.includes(nextTableId)) {
            setVisibleTables(prevTables => [...prevTables, nextTableId]);
        }

        if (!clickedImageSlugs.includes(image.title_slug)) {
            // Si no está en el array, lo agregamos
            setClickedImageSlugs([...clickedImageSlugs, image.title_slug]);
        }
    };

    console.log(clickedImageSlugs)

    return <FurnitureComponent
        visibleTables={visibleTables}
        handleImageClick={handleImageClick}
    />
}