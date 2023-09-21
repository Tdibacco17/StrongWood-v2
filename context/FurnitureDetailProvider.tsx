'use client'
import { PaymentMethodInterface } from "@/types";
import { DetailsFurnitureInterface, FurnitureDataContextInterface, FurnitureDataInterface, FurnitureTableInterface } from "@/types/design";
import { ReactNode, createContext, useState } from "react";

export const FurnitureDetailContext = createContext<FurnitureDataContextInterface | {}>({});

export const FurnitureDetailProvider = ({ children, }: { children: ReactNode; }) => {
    const [furnitureData, setFurnitureData] = useState<DetailsFurnitureInterface | undefined>(undefined);

    const handleFurnitureDataChange = (furnitureData: DetailsFurnitureInterface) => {
        setFurnitureData(furnitureData);
    };

    const [paymentMethod, setPaymentMethod] = useState<PaymentMethodInterface | undefined>(undefined)

    const handlePaymentMethod = (paymentMethod: PaymentMethodInterface) => {
        setPaymentMethod(paymentMethod);
    };

    return (
        <FurnitureDetailContext.Provider
            value={{
                furnitureData, handleFurnitureDataChange,
                paymentMethod, handlePaymentMethod
            }}
        >
            {children}
        </FurnitureDetailContext.Provider>
    );
};