import Link from "next/link"
import styles from './NavDesktopComponent.module.scss'
import data from '@/models/es.json'
import BtnScrollToSectionComponent from '../BtnScrollToComponent/BtnScrollToComponent'
import { HeaderProps } from "@/types"

export default function NavDesktopComponent({ isHome }: { isHome: boolean }) {
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
                                as={`/${item.link}`}
                                href={`/${item.link}`}
                                className={styles['desktop-title']}
                                key={item.nav_id}
                            >
                                {item.title}
                            </Link>
                    }) : data.navigation.headers.others.map((item: HeaderProps) => {
                        return <Link
                            as={`/${item.link}`}
                            href={`/${item.link}`}
                            className={styles['desktop-title']}
                            key={item.nav_id}
                        >
                            {item.title}
                        </Link>
                    })
            }
        </div>
    )
}