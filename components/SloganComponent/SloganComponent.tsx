import styles from './SloganComponent.module.scss'
import data from '@/models/es.json'
import { WhatsappIconComponent, InstagramIconComponent, GoogleIconComponent } from '../IconComponent/IconComponent'

export default function SloganComponent() {
    return (
        <div className={styles['container-section-slogan']}>
            <div className={styles['container-slogan-card']}>
                <div className={styles['container-networks']}>
                    <div className={styles['box-networks']}>
                        <p className={styles['title-networks']}>{data.slogan.networks.title}</p>
                        <div className={styles['container-icons-networks']}>
                            <GoogleIconComponent fill={'white'} width={30} height={30} />
                            <InstagramIconComponent fill={'white'} width={30} height={30} />
                            <WhatsappIconComponent fill={'white'} width={30} height={30} />
                        </div>
                    </div>
                    <button className={styles['button-contact']}>{data.slogan.button.title}</button>
                </div>
                <div className={styles['container-titles']}>
                    <p className={styles['subtitle']}>{data.slogan.subtitle}</p>
                    <p className={styles['title']} >{data.slogan.title}</p>
                </div>
            </div>
        </div>
    )
}