import { ImgDataInterface, PaymentMethodInterface } from ".";

export interface DesignDataContextInterface {
    designData: FurnitureTableInterface[];
    handleDesignDataChange: Function;
    paymentMethod: PaymentMethodInterface;
    handlePaymentMethod: (method: PaymentMethodInterface) => void;
}
export type DesignCategorieInterface = 'cocinas' | 'banio' | 'placares' | 'dormitorio';

export interface DesignDataInterface {
    [id: string]: DesignInterface;
}

export interface DesignInterface {
    design_slug: string;
    subcategories: SubCategorieDataInterface[],
    details: FurnitureDataInterface,
    measures?: MeasureDataInterface
}

export interface SubCategorieDataInterface {
    subcategorie_slug: string;
    title: string,
    subtitle: string,
    images: ImgDataInterface[]
}

export interface FurnitureDataInterface {
    [id: string]: FurnitureTableInterface[];
}

export interface FurnitureTableInterface {
    tableId: number,
    tableTitle: string,
    maxSelections: number,
    askMeasure: boolean,
    cards: ImgDataInterface[],
}

export interface MeasureDataInterface {
    [id: string]: Measure;
}

export interface Measure {
    numValuesToComplete: number,
    measure_slug: string,
    leters: MeasureType[]
}

export interface MeasureType {
    measure_id: number,
    title: string,
    measure: number
}

export interface FurnitureDataCardsInterface {
    cardId: number,
    cardTitle: string,
    image?: ImgDataInterface
}
