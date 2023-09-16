import styles from './page.module.scss'
import NavigationContainer from '@/containers/NavigationContainer/NavigationContainer'
import data from '@/models/es.json'

export default function KitchenDetailPage({ params }: { params: { slug: string } }) {
    console.log(params)
    return (
        <>
            <NavigationContainer isHome={false} showUrl={true} url={'/cocinas'} />
        </>
    )
}