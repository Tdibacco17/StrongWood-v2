'use client'
import { designData } from '@/models/design'
import { useContext, useEffect, useState } from "react";
import { DesignCategorieInterface, FurnitureDataContextInterface, MeasureValues } from "@/types/design";
import { useRouter } from 'next/navigation';
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

    return <FurnitureComponent
        // measureValues={measureValues}
        // imgSlugsWithAskMeasure={imgSlugsWithAskMeasure}
        // handleMeasureChange={handleMeasureChange}
    />
}