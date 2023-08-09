'use client'
import { handleScrollToSection } from '@/utils/scroll/useScrollToSection'
import styles from './BtnScrollToComponent.module.scss'

interface Props {
    scrollTo: string,
    title: string,
    isMobile?: boolean,
    handleShowMenu?: () => void
}

export default function BtnScrollToComponent({ scrollTo, title, isMobile, handleShowMenu }: Props) {
    const handleButtonSCroll = () => {
        handleShowMenu && handleShowMenu()
        handleScrollToSection(scrollTo)
    }
    return <button type='button' aria-label={`Ir a ${title}`} onClick={handleButtonSCroll} className={`${styles['btn-scroll-to-section']} ${isMobile ? styles['isMobile'] : ''}`}>
        {title}
    </button>
}