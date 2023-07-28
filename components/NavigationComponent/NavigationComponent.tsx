import styles from './NavigationComponent.module.scss'
import data from '@/models/es.json'

interface HedersTitleInterface {
    nav_id: number,
    title: string,
    link: string
}

export default function NavigationComponent() {
    return (
        <section className={styles['container-section-navigation']}>
            <h1 className={styles['menu-logo']}>{data.navigation.title}</h1>
            <div className={styles['container-menu-titles']}>
                {
                    data.navigation.headers.map((item: HedersTitleInterface) => {
                        return <a className={styles['titles']} href={item.link} key={item.nav_id}>
                            {item.title}
                        </a>
                    })
                }
            </div>
        </section>
    )
}