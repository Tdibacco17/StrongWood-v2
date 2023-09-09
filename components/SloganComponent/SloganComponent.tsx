import styles from './SloganComponent.module.scss'
import data from '@/models/es.json'
import { WhatsappIconComponent, InstagramIconComponent, GoogleIconComponent } from '../IconComponent/IconComponent'
import Link from 'next/link'

export default function SloganComponent() {
    return (
        <section className={styles['container-section-slogan']}>
            <div className={styles['container-slogan-card']}>
                <div className={styles['container-networks']}>
                    <div className={styles['box-networks']}>
                        <p className={styles['title-networks']}>{data.homePage.slogan.networks.title}</p>
                        <div className={styles['container-icons-networks']}>
                            <a className={styles['icon-network']} href={data.homePage.slogan.networks.gmail.href} target="_blank" rel="preload" aria-label={data.homePage.slogan.networks.gmail.label}>
                                <GoogleIconComponent fill={'white'} width={30} height={30} />
                            </a>
                            <a className={styles['icon-network']} href={data.homePage.slogan.networks.instagram.href} target="_blank" rel="preload" aria-label={data.homePage.slogan.networks.instagram.label}>
                                <InstagramIconComponent fill={'white'} width={30} height={30} />
                            </a>
                            <a className={styles['icon-network']} href={data.homePage.slogan.networks.whatsapp.href} target="_blank" rel="preload" aria-label={data.homePage.slogan.networks.whatsapp.label}>
                                <WhatsappIconComponent fill={'white'} width={30} height={30} />
                            </a>
                        </div>
                    </div>
                    <Link /* as={data.homePage.slogan.button.link}*/ href={data.homePage.slogan.button.link} className={styles['button-contact']}>{data.homePage.slogan.button.title}</Link>
                </div>
                <div className={styles['container-titles']}>
                    <p className={styles['subtitle']}>{data.homePage.slogan.subtitle}</p>
                    <p className={styles['title']} >{data.homePage.slogan.title}</p>
                </div>
            </div>
        </section>
    )
}