'use client'
import { PaymentMethodInterface } from "@/types";
import { DesignDataContextInterface, FurnitureDataInterface, FurnitureTableInterface } from "@/types/design";
import { ReactNode, createContext, useState } from "react";

export const DesignDetailContext = createContext<DesignDataContextInterface | {}>({});

export const DesignDetailProvider = ({ children, }: { children: ReactNode; }) => {
    const [designData, setDesignData] = useState<FurnitureTableInterface[] | undefined>(undefined);

    const handleDesignDataChange = (designData: FurnitureTableInterface[]) => {
        setDesignData(designData);
    };

    const [paymentMethod, setPaymentMethod] = useState<PaymentMethodInterface | undefined>(undefined)

    const handlePaymentMethod = (paymentMethod: PaymentMethodInterface) => {
        setPaymentMethod(paymentMethod);
    };

    return (
        <DesignDetailContext.Provider
            value={{
                designData, handleDesignDataChange,
                paymentMethod, handlePaymentMethod
            }}
        >
            {children}
        </DesignDetailContext.Provider>
    );
};