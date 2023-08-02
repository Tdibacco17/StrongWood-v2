'use client'
import { handleScrollToSection } from '@/utils/scroll/useScrollToSection'
import styles from './BtnScrollToSectionComponent.module.scss'

export default function BtnScrollToSectionComponent({ scrollTo, title }: { scrollTo: string, title: string }) {
    return <button onClick={() => handleScrollToSection(scrollTo ?? '')} className={styles['btn-scroll-to-section']}>
        {title}
    </button>
}