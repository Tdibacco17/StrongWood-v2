export interface ImgDataInterface {
    img_id: number,
    imgSrc: string,
    imgAlt: string,
    sizes?: string,
}

export interface ImgBlurDataInterface extends ImgDataInterface {
    blurHash: string,
    link?: string
}

export interface NavigationInterface {
    nav_id: number,
    title: string,
    link?: string
    scrollTo?: string
    dropdown?: NavigationDropdownInterface[]
}

export interface NavigationDropdownInterface {
    dropdown_id: number,
    title: string,
    link: string
}

export interface NavigationProps {
    isHome: boolean,
    showMenu?: boolean,
    handleShowMenu?: () => void,
    showDropdown?: boolean,
    handleShowDropdown?: () => void,
    menuRef?: React.RefObject<HTMLDivElement>;
    dropdownRef?: React.RefObject<HTMLDivElement>;
}

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