export interface ImgDataInterface {
    img_id?: number,
    imgSrc: string,
    imgAlt: string,
    objPosition?: string,
    link?: string,
    sizes?: string
}

export interface HeaderProps {
    nav_id: number,
    title: string,
    link?: string
    scrollTo?: string
    dropdown?: DropdownData[]
}

export interface DropdownData {
    dropdown_id: number,
    title: string,
    link?: string
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