import DesignDetailContainer from '@/containers/DesignDetailContainer/DesignDetailContainer'
import styles from './page.module.scss'
import NavigationContainer from '@/containers/NavigationContainer/NavigationContainer'
import data from '@/models/es.json'

export default function KitchenDetailPage({ params }: { params: { slug: string } }) {
    return (
        <>
            <NavigationContainer isHome={false} showUrl={true} url={'/cocinas'} />
            <section id={data.designPage.sectionLink} className={styles['container-section-kitchen-detail-page']}>
                <DesignDetailContainer designKey='cocinas' params={params} isGeneric={true}/>
            </section>
        </>
    )
}