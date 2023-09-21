'use client'
import { designData } from '@/models/design'
import { useContext, useEffect, useState } from "react";
import { DesignDetailContext } from "@/context/DesignDetailProvider";
import { DesignCategorieInterface, DesignDataContextInterface, FurnitureDataCardsInterface } from "@/types/design";
import DesignDetailComponent from '@/components/DesignDetailComponent/DesignDetailComponent';
import { useRouter } from 'next/navigation';
import { ImgDataInterface } from '@/types';

export default function DesignDetailContainer({
    designKey,
    params,
    isGeneric
}: {
    designKey: DesignCategorieInterface,
    params: { slug: string },
    isGeneric: boolean
}) {
    const { handleDesignDataChange } = useContext(
        DesignDetailContext
    ) as DesignDataContextInterface

    useEffect(() => {
        if (isGeneric) {
            handleDesignDataChange(designData['cocinas'].details['generic']);
        } else {
            if (params.slug) {
                handleDesignDataChange(designData['cocinas'].details[params.slug]);
            }
        }
    }, [params.slug]);

    const router = useRouter();

    const [inputError, setInputError] = useState<boolean>(false);
    const [currentTableId, setCurrentTableId] = useState<number | null>(null);
    const [measureValues, setMeasureValues] = useState<any>({});
    const [visibleTables, setVisibleTables] = useState([1]);
    const [clickedImages, setClickedImages] = useState<{ [key: number]: FurnitureDataCardsInterface[] }>({});
    const [validated, setValidated] = useState<boolean>(false);
    const [showMissingFields, setShowMissingFields] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [imgData, setImgData] = useState<ImgDataInterface | undefined>(undefined);

    return <DesignDetailComponent />
}