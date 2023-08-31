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
    isSelectField: boolean
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
    noteRef: string,
    handleChangeNoteRef: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
    loadingText: boolean,
    errorMessage: string,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
