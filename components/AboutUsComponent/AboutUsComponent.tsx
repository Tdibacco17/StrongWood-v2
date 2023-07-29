import styles from './AboutUsComponent.module.scss'
import data from '@/models/es.json'

interface TextsInterface {
    text_id: number,
    text: string
}

export default function AboutUsComponent() {
    return (
        <div className={styles['container-section-about']}>
            <div className={styles['container-top-card']}>
                <div className={styles['container-box']}>
                    <div className={styles['box']}>
                        <p className={styles['year']}>{data.aboutUs.box.year}</p>
                        <div className={styles['container-texts']}>
                            {
                                data.aboutUs.box.texts.map((text: TextsInterface) => {
                                    return <p className={styles['text']} key={text.text_id}>{text.text}</p>
                                })
                            }
                        </div>
                        <div className={styles['container-overlay-left']} />
                        <div className={styles['container-overlay-right']} />
                    </div>
                </div>
                <div className={styles['container-titles']}>
                    <p className={styles['title']}>{data.aboutUs.title}</p>
                    <p className={styles['subtitle']} >{data.aboutUs.subtitle}</p>
                </div>
            </div>
            <div className={styles['container-description']}>
                <p className={styles['description']}>{data.aboutUs.description}</p>
                <button className={styles['button-contact']}>{data.aboutUs.button.title}</button>
            </div>
        </div>
    )
}