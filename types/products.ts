import { ImgDataInterface } from ".";

export interface ProductsDataContextInterface {
    productData: ProductInterface;
    handleProductDataChange: Function;
}

export interface ProductDataInterface {
    [id: string]: ProductInterface;
}

export interface ProductInterface {
    product_slug: string;
    title: string;
    image: ImgDataInterface;
    price: string;
    offerPrice: string;
    offerPercentage: number;
    details: {
        cash_payment: PaymentDataInterface;
        description: DescriptionDataInterface,
        // images?: ImgDataInterface[];
    },
}

export interface PaymentDataInterface {
    price: string,
    offerPrice: string,
    offerPercentage: number;
}

export interface DescriptionDataInterface {
    title: string,
    itemsDescription: string[],
    measures?: string
}