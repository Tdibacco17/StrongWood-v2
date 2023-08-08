import styles from './NavigationComponent.module.scss'
import data from '@/models/es.json'
import Link from 'next/link'
import { BurgerMenuIconComponent } from '../IconComponent/IconComponent'
import NavDesktopComponent from './NavDesktopComponent/NavDesktopComponent'
import NavMobileComponent from './NavMobileComponent/NavMobileComponent'
import { NavigationProps } from '@/types'

export default function NavigationComponent({
    isHome,
    showMenu,
    handleShowMenu,
    menuRef
}: NavigationProps) {
    return (
        <section className={`${styles['container-section-navigation']}`}>
            <div className={styles['wrapper-nav']}>
                <Link as={'/'} href={'/'}>
                    <h1 className={styles['menu-logo']}>{data.navigation.title}</h1>
                </Link>
                <NavDesktopComponent isHome={isHome} />
                <button className={styles['container-icon-menu']} onClick={handleShowMenu}>
                    <BurgerMenuIconComponent fill={'white'} width={30} height={30} />
                </button>
            </div>
            {
                showMenu && <div className={styles['container-overlay-menu-mobile']} >
                    <NavMobileComponent isHome={isHome} showMenu={showMenu} handleShowMenu={handleShowMenu} menuRef={menuRef} />
                </div>
            }
        </section>
    )
}