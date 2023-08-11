import { HandsIconComponent, ShippingCarIconComponent, WalletIconComponent } from '../IconComponent/IconComponent'
import styles from './ServicesComponent.module.scss'
import data from '@/models/es.json'

export default function ServicesComponent() {
    return (
        <section className={styles['container-section-services']}>
            <p className={styles['container-title-services']}>{data.services.title}</p>
            <div className={styles['container-cards-services']}>
                <div className={styles['box-icon-services']}>
                    <ShippingCarIconComponent fill={'white'} height={50} width={50} />
                    <div>
                        <p className={styles['services-title']}>{data.services.shippingCar.title}</p>
                        <p className={styles['services-subtitle']}>{data.services.shippingCar.subtitle}</p>
                    </div>
                </div>
                <div className={`${styles['box-icon-services']} ${styles['services-line-divider']}`}>
                    <WalletIconComponent fill={'white'} height={50} width={50} />
                    <div>
                        <p className={styles['services-title']}>{data.services.wallet.title}</p>
                        <p className={styles['services-subtitle']}>{data.services.wallet.subtitle}</p>
                    </div>
                </div>
                <div className={styles['box-icon-services']}>
                    <HandsIconComponent fill={'white'} height={50} width={50} />
                    <div>
                        <p className={styles['services-title']}>{data.services.hands.title}</p>
                        <p className={styles['services-subtitle']}>{data.services.hands.subtitle}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}