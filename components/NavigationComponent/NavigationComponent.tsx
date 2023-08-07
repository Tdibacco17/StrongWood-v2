import styles from './NavigationComponent.module.scss'
import data from '@/models/es.json'
import Link from 'next/link'
import { BurgerMenuIconComponent } from '../IconComponent/IconComponent'
import NavDesktopComponent from './NavDesktopComponent/NavDesktopComponent'
import NavMobileComponent from './NavMobileComponent/NavMobileComponent'

export default function NavigationComponent({ isHome }: { isHome: boolean }) {
    return (
        <>
            <section className={`${styles['container-section-navigation']}`}>
                <div className={styles['wrapper-nav']}>
                    <Link as={'/'} href={'/'}>
                        <h1 className={styles['menu-logo']}>{data.navigation.title}</h1>
                    </Link>
                    <NavDesktopComponent isHome={isHome} />
                    <div className={styles['container-icon-menu']}>
                        <BurgerMenuIconComponent fill={'white'} width={30} height={30} />
                    </div>
                </div>
            </section>
            <NavMobileComponent isHome={isHome} />
            <div className={styles['container-overlay-menu-mobile']} />
        </>
    )
}