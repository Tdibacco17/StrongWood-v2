import { ImgDataInterface } from ".";

export interface ProductsDataContextInterface {
    productsData: ProductDataInterface;
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
    price?: string;
    offerPrice: string;
    offerPercentage?: string;
    details: {
        payment: {
            cash: PaymentDataInterface;
            card: PaymentDataInterface;
        },
        description: DescriptionDataInterface,
        images: ImgDataInterface[]
    },
}

export interface PaymentDataInterface {
    title: string,
    price?: string,
    offerPrice: string,
    offerPercentage?: string;
}

export interface DescriptionDataInterface {
    title: string,
    itemsDescription: string[],
    measures?: string
}