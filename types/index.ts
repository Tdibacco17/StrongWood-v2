export interface ImgDataInterface {
    img_id?: number,
    imgSrc: string,
    imgAlt: string,
    objPosition?: string
}

export interface HeaderProps {
    nav_id: number,
    title: string,
    link?: string,
    scrollTo?: string | undefined
}