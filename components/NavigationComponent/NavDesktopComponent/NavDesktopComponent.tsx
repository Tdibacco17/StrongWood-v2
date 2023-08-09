import Link from "next/link"
import styles from './NavDesktopComponent.module.scss'
import data from '@/models/es.json'
import BtnScrollToSectionComponent from '../BtnScrollToComponent/BtnScrollToComponent'
import { DropdownData, HeaderProps, NavigationProps } from "@/types"

export default function NavDesktopComponent({ isHome, showDropdown, handleShowDropdown, dropdownRef }: NavigationProps) {
    return (
        <div className={styles['container-menu-desktop']}>
            {
                isHome ?
                    data.navigation.headers.home.map((item: HeaderProps) => {
                        return item.scrollTo ?
                            <BtnScrollToSectionComponent
                                scrollTo={item.scrollTo}
                                title={item.title}
                                key={item.nav_id}
                            />
                            : <Link
                                as={item.link ?? ''}
                                href={item.link ?? ''}
                                className={styles['desktop-title']}
                                key={item.nav_id}
                            >
                                {item.title}
                            </Link>
                    }) : data.navigation.headers.others.map((item: HeaderProps) => {
                        return item.dropdown ?
                            <div key={item.nav_id}>
                                <p className={`${styles['desktop-title']}`}
                                    onClick={handleShowDropdown}>
                                    {item.title}
                                </p>
                                {
                                    showDropdown &&
                                    <div className={styles['container-desktop-dropdowns-titles']} ref={dropdownRef}>
                                        {item.dropdown.map((item: DropdownData) => {
                                            return <Link
                                                key={item.dropdown_id}
                                                as={item.link ?? ''}
                                                href={item.link ?? ''}
                                                className={`${styles['desktop-title']}`}
                                            >
                                                {item.title}
                                            </Link>
                                        })}
                                    </div>
                                }
                            </div>
                            : <Link
                                as={item.link ?? ''}
                                href={item.link ?? ''}
                                className={styles['desktop-title']}
                                key={item.nav_id}
                            >
                                {item.title}
                            </Link>
                    })
            }
        </div >
    )
}