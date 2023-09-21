'use client'
import { PaymentMethodInterface } from "@/types";
import { FurnitureDataContextInterface, FurnitureDataInterface, FurnitureTableInterface } from "@/types/design";
import { ReactNode, createContext, useState } from "react";

export const FurnitureDetailContext = createContext<FurnitureDataContextInterface | {}>({});

export const FurnitureDetailProvider = ({ children, }: { children: ReactNode; }) => {
    const [furnitureData, setFurnitureData] = useState<FurnitureTableInterface[] | undefined>(undefined);

    const handleFurnitureDataChange = (furnitureData: FurnitureTableInterface[],) => {
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