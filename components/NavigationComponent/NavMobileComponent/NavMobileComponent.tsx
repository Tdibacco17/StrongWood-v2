import { HeaderProps } from '@/types'
import styles from './NavMobileComponent.module.scss'
import BtnScrollToSectionComponent from '../BtnScrollToComponent/BtnScrollToComponent'
import data from '@/models/es.json'
import Link from 'next/link'

export default function NavMobileComponent({ isHome }: { isHome: boolean }) {
    return (
        <div className={styles['container-menu-mobile']}>
            {
                true && <div className={styles['container-side-menu']}>
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
                                        className={styles['title']}
                                        key={item.nav_id}
                                    >
                                        {item.title}
                                    </Link>
                            }) : data.navigation.headers.others.map((item: HeaderProps) => {
                                return item.scrollTo ?
                                    <BtnScrollToSectionComponent
                                        scrollTo={item.scrollTo}
                                        title={item.title}
                                        key={item.nav_id}
                                    />
                                    : <Link
                                        as={`/${item.link}`}
                                        href={`/${item.link}`}
                                        className={styles['title']}
                                        key={item.nav_id}
                                    >
                                        {item.title}
                                    </Link>
                            })
                    }
                </div>
            }
        </div>
    )
}