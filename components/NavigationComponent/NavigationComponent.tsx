import styles from './NavigationComponent.module.scss'
import data from '@/models/es.json'
import Link from 'next/link'
import BtnScrollToSectionComponent from './BtnScrollToComponent/BtnScrollToComponent'
import { BurgerMenuIconComponent } from '../IconComponent/IconComponent'

interface HeaderProps {
    nav_id: number,
    title: string,
    link?: string,
    scrollTo?: string | undefined
}

export default function NavigationComponent({ isHome }: { isHome: boolean }) {
    return (
        <section className={`${styles['container-section-navigation']}`}>
            <div className={styles['wrapper-nav']}>
                <Link as={'/'} href={'/'}>
                    <h1 className={styles['menu-logo']}>{data.navigation.title}</h1>
                </Link>
                <div className={styles['container-menu-titles']}>
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
                                        className={styles['titles']}
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
                                        className={styles['titles']}
                                        key={item.nav_id}
                                    >
                                        {item.title}
                                    </Link>
                            })
                    }
                </div>
                <div className={styles['container-menu-mobile']}>
                    <BurgerMenuIconComponent fill={'white'} width={30} height={30} />
                </div>
            </div>
        </section>
    )
}