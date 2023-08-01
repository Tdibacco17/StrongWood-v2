'use client'
import styles from './ScrollToButton.module.scss'

export default function ScrollToButton({ targetSection, text }: { targetSection: string, text?: string | undefined }) {
    function handleScrollToSection() {
        const section = document.getElementById(targetSection);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <p className={`${styles['titles']} ${text ? "" : styles['isToTop']}`} onClick={handleScrollToSection}>
            {text ? text : 'Scroll to top'}
        </p>
    );
}