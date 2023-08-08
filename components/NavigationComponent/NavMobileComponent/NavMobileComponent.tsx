import { DropdownData, HeaderProps, NavigationProps } from '@/types'
import styles from './NavMobileComponent.module.scss'
import BtnScrollToSectionComponent from '../BtnScrollToComponent/BtnScrollToComponent'
import data from '@/models/es.json'
import Link from 'next/link'

export default function NavMobileComponent({ isHome, showMenu, handleShowMenu, menuRef, showDropdown, handleShowDropdown }: NavigationProps) {
    return (
        <div className={styles['container-menu-mobile']} ref={menuRef}>
            <div className={styles['container-side-menu']}>
                <div className={styles['container-header-mobile-menu']}>
                    <Link as={'/'} href={'/'} onClick={handleShowMenu}>
                        <h1 className={styles['menu-logo']}>{data.navigation.title}</h1>
                    </Link>

                    <button
                        className={styles["button-mobile-menu"]}
                        onClick={handleShowMenu}>x</button>
                </div>
                <div className={styles['container-mobile-titles']}>
                    {
                        isHome ?
                            data.navigation.headers.home.map((item: HeaderProps) => {
                                return item.scrollTo ?
                                    <BtnScrollToSectionComponent
                                        isMobile={true}
                                        scrollTo={item.scrollTo}
                                        handleShowMenu={handleShowMenu}
                                        title={item.title}
                                        key={item.nav_id}
                                    />
                                    : <Link
                                        as={`/${item.link}`}
                                        href={`/${item.link}`}
                                        className={styles['mobile-title']}
                                        key={item.nav_id}
                                        onClick={handleShowMenu}
                                    >
                                        {item.title}
                                    </Link>
                            }) : data.navigation.headers.others.map((item: HeaderProps) => {
                                return item.dropdown ?
                                    <div key={item.nav_id}>
                                        <p className={`${styles['mobile-title']} ${showDropdown ? styles['dropdownActive'] : ''}`}
                                            onClick={handleShowDropdown}>
                                            {item.title}
                                        </p>
                                        {
                                            showDropdown &&
                                            <div className={styles['container-mobile-dropdowns-titles']}>
                                                {item.dropdown.map((item: DropdownData) => {
                                                    return <Link
                                                        key={item.dropdown_id}
                                                        as={`/${item.link}`}
                                                        href={`/${item.link}`}
                                                        className={`${styles['mobile-title']} ${showDropdown ? styles['dropdown'] : ''}`}
                                                    >
                                                        {item.title}
                                                    </Link>
                                                })}
                                            </div>
                                        }
                                    </div>
                                    : <Link
                                        as={`/${item.link}`}
                                        href={`/${item.link}`}
                                        className={styles['mobile-title']}
                                        key={item.nav_id}
                                        onClick={handleShowMenu}
                                    >
                                        {item.title}
                                    </Link>
                            })
                    }
                </div>
            </div>
        </div>
    )
}