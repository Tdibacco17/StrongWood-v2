import NavigationContainer from '@/containers/NavigationContainer/NavigationContainer'
import styles from './page.module.scss'
import data from '@/models/es.json'
import FurnitureContainer from '@/containers/FurnitureContainer/FurnitureContainer'

export default function ClosetsDetailPage({ params }: { params: { slug: string } }) {
    return (
        <>
        <NavigationContainer isHome={false} showUrl={true} url={'/placares'} />
        <section id={data.designPage.sectionLink} className={styles['container-section-closets-detail-page']}>
            <FurnitureContainer designKey='placares' params={params} isGeneric={true} />
        </section>
    </>
    )
}