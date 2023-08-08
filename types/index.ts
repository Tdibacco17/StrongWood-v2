export interface ImgDataInterface {
    img_id?: number,
    imgSrc: string,
    imgAlt: string,
    objPosition?: string
}

export interface HeaderProps {
    nav_id: number,
    title: string,
    link?: string
    scrollTo?: string
}

export interface NavigationProps {
    isHome: boolean,
    showMenu?: boolean,
    handleShowMenu: () => void,
    menuRef: React.RefObject<HTMLDivElement>;
}