import styles from './NavigationComponent.module.scss'
import data from '@/models/es.json'
import Link from 'next/link'
import { ArrowLeftIconComponent, BurgerMenuIconComponent } from '../IconComponent/IconComponent'
import { NavigationUrlProps } from '@/types'
import SideMenuComponent from './SideMenuComponent/SideMenuComponent'

export default function NavigationComponent({
    isHome,
    showMenu,
    handleShowMenu,
    showDropdown,
    handleShowDropdown,
    menuRef,
    url,
    showUrl,
}: NavigationUrlProps) {
    return (
        <section className={`${styles['container-section-navigation']}`}>
            <div className={styles['wrapper-nav']}>
                {showUrl ? <Link href={`${url ?? "/"}`} className={`${styles['container-icon-back']}`}>
                    <ArrowLeftIconComponent fill={'white'} height={30} width={30} />
                </Link>
                    : <div className={styles['showUrl']} />
                }
                <Link /*as={data.navigation.link}*/ href={data.navigation.link}>
                    <h1 className={styles['menu-logo']}>{data.navigation.title}</h1>
                </Link>
                <button
                    type='button'
                    aria-label="Mostrar menú"
                    className={styles['container-icon-menu']}
                    onClick={handleShowMenu}
                >
                    <BurgerMenuIconComponent fill={'white'} width={30} height={30} />
                </button>
            </div>
            <SideMenuComponent
                isHome={isHome}
                showMenu={showMenu}
                handleShowMenu={handleShowMenu}
                showDropdown={showDropdown}
                handleShowDropdown={handleShowDropdown}
                menuRef={menuRef}
            />
        </section >
    )
}