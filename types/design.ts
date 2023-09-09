import { ImgDataInterface, PaymentMethodInterface } from ".";

export interface DesignDataContextInterface {
    designData?: DesignInterface;
    handleDesignDataChange?: Function;
    paymentMethod: PaymentMethodInterface;
    handlePaymentMethod: (method: PaymentMethodInterface) => void;
}
export type DesignCategorieInterface = 'cocina' | 'ba%C3%B1o' | 'placares' | 'dormitorio';

export interface DesignDataInterface {
    [id: string]: DesignInterface;
}

export interface DesignInterface {
    design_slug: string;
    subcategories: SubCategorieDataInterface[]
}

export interface SubCategorieDataInterface {
    subcategorie_slug: string;
    title: string,
    subtitle: string,
    images: ImgDataInterface[]
}