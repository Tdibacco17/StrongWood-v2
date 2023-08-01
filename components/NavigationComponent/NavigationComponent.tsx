import ScrollToButton from '@/utils/ScrollToButton/ScrollToButton'
import styles from './NavigationComponent.module.scss'
import data from '@/models/es.json'
import Link from 'next/link'

interface HedersTitleInterface {
    nav_id: number,
    title: string,
    link?: string,
    scrollTo?: string
}

export default function NavigationComponent() {
    return (
        <section className={styles['container-section-navigation']}>
            <h1 className={styles['menu-logo']}>{data.navigation.title}</h1>
            <div className={styles['container-menu-titles']}>
                {
                    data.navigation.headers.map((item: HedersTitleInterface) => {
                        return (
                            <>
                                {
                                    item.scrollTo ?
                                        <ScrollToButton targetSection={item.scrollTo} text={item.title} key={item.nav_id} />
                                        : <Link href={``/*${item.link}*/} className={styles['titles']} key={item.nav_id}>
                                            {item.title}
                                        </Link>

                                }
                            </>

                        )
                    })
                }
            </div>
        </section >
    )
}