'use client'
import styles from './BtnTopComponent.module.scss'
import { handleScrollToSection } from '@/utils/scroll/useScrollToSection'

export default function BtnTopComponent({ scrollTo, title }: { scrollTo: string, title: string }) {
    return <button type='button' aria-label='Ir arriba' className={styles['btn-scroll-to-top']} onClick={() => handleScrollToSection(scrollTo ?? '')}>
        {title}
    </button>
}