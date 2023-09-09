import { ImgDataInterface, PaymentMethodInterface } from ".";

export interface ProductsDataContextInterface {
    productData: ProductInterface;
    handleProductDataChange: Function;
    paymentMethod: PaymentMethodInterface;
    handlePaymentMethod: (method: PaymentMethodInterface) => void;
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

export interface ProductGalleryProps {
    width: number,
    handleScrollLeft: () => void;
    handleScrollUp: () => void;
    handleScrollRight: () => void;
    handleScrollDown: () => void;
    activeImage: ImgDataInterface | undefined;
    carouselRef: React.RefObject<HTMLDivElement>;
    handleImageClick: (index: number) => void;
}