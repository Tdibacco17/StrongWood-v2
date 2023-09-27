'use client'
import { ClickedImagesInterface, ContactDataInterface, FurnitureDataContextInterface, FurnitureTableInterface } from "@/types/design";
import { ReactNode, createContext, useState } from "react";

export const FurnitureDetailContext = createContext<FurnitureDataContextInterface | {}>({});

export const FurnitureDetailProvider = ({ children, }: { children: ReactNode; }) => {
    const [furnitureData, setFurnitureData] = useState<FurnitureTableInterface[] | undefined>(undefined);

    const handleFurnitureDataChange = (furnitureData: FurnitureTableInterface[],) => {
        setFurnitureData(furnitureData);
    };
    const [contactData, setContactData] = useState<ContactDataInterface | undefined>(undefined)

    const handleContactData = (data: ContactDataInterface) => {
        setContactData(data);
    };

    return (
        <FurnitureDetailContext.Provider
            value={{
                furnitureData, handleFurnitureDataChange,
                contactData, handleContactData
            }}
        >
            {children}
        </FurnitureDetailContext.Provider>
    );
};