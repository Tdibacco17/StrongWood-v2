import { ClickedImagesInterface, MeasureInterface } from "./design";

export interface ImgDataInterface {
    img_id: number,
    imgSrc: string,
    imgAlt: string,
    sizes?: string,
    link?: string,
    imgBlur: string,
}

export interface GridPropsInterface extends ImgDataInterface {
    imgSpan?: number,
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
    showMenu: boolean,
    handleShowMenu: () => void,
    showDropdown: boolean,
    handleShowDropdown: () => void,
    menuRef: React.RefObject<HTMLDivElement>;
}

export interface NavigationUrlProps extends NavigationProps {
    url: string,
    showUrl: boolean
}
export type BannerPositionInterface = "homePage" | "aboutUsPage" | "productPage";
export type PaymentMethodInterface = 'efectivo' | 'tarjeta';

export interface FieldToCompleteProps {
    fieldProps?: FieldProps,
    selectProps?: SelectProps[],
    valueRef?: React.RefObject<HTMLInputElement>,
    selectRef?: React.RefObject<HTMLSelectElement>,
    handleChangeNoteRef?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
    handlePaymentChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    selectedPayment?: string,
    paymentMethod?: string,
    isSelect?: boolean,
    isTextAreaField: boolean,
    isSelectField: boolean,
    contactPage: boolean,
    selectWidth?: boolean,
    isRequired?: boolean
}

export interface FieldProps {
    label: string,
    input: {
        type?: string,
        name?: string,
        placeholder: string,
    }
}

export interface SelectProps {
    option_id: number,
    text: string,
    value: string
}

export interface AboutUscardInterface {
    card_id: number,
    isReverse: boolean,
    image: ImgDataInterface,
    text: {
        title?: string,
        description: string
    }
}

//CONTACT PRODUCT
export interface MessageContactProductDataInterface {
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

export interface ContactProductProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handlePaymentChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    nameRef: React.RefObject<HTMLInputElement>,
    phoneRef: React.RefObject<HTMLInputElement>,
    emailRef: React.RefObject<HTMLInputElement>,
    directionRef: React.RefObject<HTMLInputElement>,
    locationRef: React.RefObject<HTMLInputElement>,
    noteRef: string,
    handleChangeNoteRef: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
    selectRef: React.RefObject<HTMLSelectElement>,
    paymentMethod: PaymentMethodInterface,
    selectedPayment: string,
    isSelect: boolean,
    loadingText: boolean,
    errorMessage: string,
    handleChangeIsNote: () => void,
    isNote: boolean
}

//CONTACT FORM
export interface MessageContactDataInterface {
    name: string,
    phone: string,
    email: string,
    direction: string,
    location: string,
    note: string,
}

export interface ContactProps {
    nameRef: React.RefObject<HTMLInputElement>,
    phoneRef: React.RefObject<HTMLInputElement>,
    emailRef: React.RefObject<HTMLInputElement>,
    directionRef: React.RefObject<HTMLInputElement>,
    locationRef: React.RefObject<HTMLInputElement>,
    handleChangeNoteRef: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
    loadingText: boolean,
    errorMessage: string,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

//CONTACT FURNITURE
export interface MessageContactFurnitureDataInterface {
    name: string,
    phone: string,
    email: string,
    direction: string,
    location: string,
    note: string,
    paymentMethod: string,
    measures: { [key: string]: number },
    clickedImages: ClickedImagesInterface[],
}

export interface ContactFurnitureProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handlePaymentChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    nameRef: React.RefObject<HTMLInputElement>,
    phoneRef: React.RefObject<HTMLInputElement>,
    emailRef: React.RefObject<HTMLInputElement>,
    directionRef: React.RefObject<HTMLInputElement>,
    locationRef: React.RefObject<HTMLInputElement>,
    noteRef: string,
    handleChangeNoteRef: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
    selectRef: React.RefObject<HTMLSelectElement>,
    selectedPayment: string,
    isSelect: boolean,
    loadingText: boolean,
    errorMessage: string,
    handleChangeIsNote: () => void,
    isNote: boolean,
}