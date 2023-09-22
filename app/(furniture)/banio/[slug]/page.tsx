import NavigationContainer from '@/containers/NavigationContainer/NavigationContainer'
import styles from './page.module.scss'
import data from '@/models/es.json'
import FurnitureContainer from '@/containers/FurnitureContainer/FurnitureContainer'

export default function BathroomDetailPage({ params }: { params: { slug: string } }) {
    return (
        <>
            <NavigationContainer isHome={false} showUrl={true} url={'/banio'} />
            <section id={data.designPage.sectionLink} className={styles['container-section-bathroom-detail-page']}>
                <FurnitureContainer designKey='banio' params={params} isGeneric={true}/>
            </section>
        </>
    )
}