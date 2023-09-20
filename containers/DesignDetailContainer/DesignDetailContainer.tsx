'use client'
import { designData } from '@/models/design'
import { useContext, useEffect } from "react";
import { DesignDetailContext } from "@/context/DesignDetailProvider";
import { DesignDataContextInterface } from "@/types/design";
import DesignDetailComponent from '@/components/DesignDetailComponent/DesignDetailComponent';

export default function DesignDetailContainer({ params, isGeneric }: { params: { slug: string }, isGeneric: boolean }) {
    const { handleDesignDataChange } = useContext(
        DesignDetailContext
    ) as DesignDataContextInterface

    useEffect(() => {
        if (isGeneric) {
            handleDesignDataChange(designData['cocinas'].details.generic);
        } else {
            if (params.slug) {
                handleDesignDataChange(designData['cocinas'].details[params.slug]);
            }
        }
    }, [params.slug]);

    return <DesignDetailComponent />
}