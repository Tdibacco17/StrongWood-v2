import NavigationContainer from '@/containers/NavigationContainer/NavigationContainer'
import styles from './page.module.scss'
import data from '@/models/es.json'

import FurnitureContainer from '@/containers/FurnitureContainer/FurnitureContainer'

export default function BedroomDetailPage({ params }: { params: { slug: string } }) {
    return (
        <section id={data.designPage.sectionLink} className={styles['container-section-bedroom-detail-page']}>
            <NavigationContainer isHome={false} showUrl={true} url={'/dormitorio'} />
            <FurnitureContainer designKey='dormitorio' params={params} isGeneric={false} />
        </section>
    )
}