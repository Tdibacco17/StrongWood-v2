import styles from './page.module.scss'
import NavigationContainer from '@/containers/NavigationContainer/NavigationContainer'
import data from '@/models/es.json'
import FurnitureContainer from '@/containers/FurnitureContainer/FurnitureContainer'

export default function KitchenDetailPage({ params }: { params: { slug: string } }) {
    return (
        <section id={data.designPage.sectionLink} className={styles['container-section-kitchen-detail-page']}>
            <NavigationContainer isHome={false} showUrl={true} url={'/cocinas'} />
            <FurnitureContainer designKey='cocinas' params={params} isGeneric={true} />
        </section>
    )
}