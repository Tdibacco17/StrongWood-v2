export interface ImgDataInterface {
    img_id: number,
    imgSrc: string,
    imgAlt: string,
    sizes?: string,
    link?: string,
    imgBlur: string
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

export type PaymentMethodInterface = 'efectivo' | 'tarjeta';

export interface MessageDataInterface {
    name: string,
    phone: string,
    email: string,
    direction: string,
    location: string,
    note: string,
    product: string,
    paymentMethod: string,
    price: string,
}