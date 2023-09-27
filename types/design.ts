import { ChangeEvent } from "react";
import { ImgDataInterface, PaymentMethodInterface } from ".";

export interface FurnitureDataContextInterface {
    furnitureData: FurnitureTableInterface[],
    handleFurnitureDataChange: Function;
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
    details: {
        tables: FurnitureDataInterface,
        measures?: MeasureDataInterface
    }
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
    table_id: number,
    title: string,
    maxSelections: number,
    askMeasure: boolean,
    cards: FurnitureDataCardsInterface[],
}

export interface FurnitureDataCardsInterface extends ImgDataInterface {
    title_slug: string,
}

export interface MeasureDataInterface {
    [id: string]: MeasureInterface;
}

export interface MeasureInterface {
    numValuesToComplete: number,
    measure_slug: string,
    leters: MeasureType[]
}

export interface MeasureType {
    measure_id: number,
    title: string,
    measure: number
}

export interface MeasureValues {
    [measureName: string]: number;
}

//furniture props
export interface FurnitureProps {
    measureValues: MeasureInterface | undefined,
    visibleTables: number[];
    handleImageClick: (image: FurnitureDataCardsInterface, tableId: number, tableTitle: string,) => void,
    handleSubmit: () => void,
    missingTableIds: number[],
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
    inputValues: { [key: string]: number },
    areInputsEmpty: boolean,
    clickedImages: { tableId: number, tableTitle: string, images: string[] }[],
}

export interface FurnitureTableContainerProps {
    table: FurnitureTableInterface,
    tableId: number,
    tableTitle: string,
    handleImageClick: (image: FurnitureDataCardsInterface, tableId: number, tableTitle: string,) => void,
    clickedImages: { tableId: number, tableTitle: string, images: string[] }[],
    isMissingImage: boolean
}

export interface FurnitureTableComponentProps {
    table: FurnitureTableInterface,
    tableId: number,
    tableTitle: string,
    carouselRef: React.RefObject<HTMLDivElement>,
    handleScrollLeft: () => void,
    handleScrollRight: () => void,
    handleImageClick: (image: FurnitureDataCardsInterface, tableId: number, tableTitle: string,) => void,
    clickedImages: { tableId: number, tableTitle: string, images: string[] }[],
    isMissingImage: boolean
}

export interface FurnitureCarrouselProps {
    carouselRef: React.RefObject<HTMLDivElement>,
    tableId: number,
    tableTitle: string,
    imagesData: FurnitureDataCardsInterface[],
    handleImageClick: (image: FurnitureDataCardsInterface, tableId: number, tableTitle: string,) => void,
    clickedImages: { tableId: number, tableTitle: string, images: string[] }[],
}

export interface FurnitureCardComponentProps {
    imageData: FurnitureDataCardsInterface,
    tableId: number,
    tableTitle: string,
    handleImageClick: (image: FurnitureDataCardsInterface, tableId: number, tableTitle: string,) => void,
    isSelected: boolean
}