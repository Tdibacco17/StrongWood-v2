'use client'
import { handleScrollToSection } from '@/utils/scroll/useScrollToSection'
import styles from './BtnScrollToComponent.module.scss'

export default function BtnScrollToComponent({ scrollTo, title }: { scrollTo: string, title: string }) {
    return <button onClick={() => handleScrollToSection(scrollTo ?? '')} className={styles['btn-scroll-to-section']}>
        {title}
    </button>
}