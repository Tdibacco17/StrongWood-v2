import styles from './page.module.scss'
import SloganComponent from '@/components/SloganComponent/SloganComponent'
import BannerComponent from '@/components/BannerComponent/BannerComponent'
import CategoriesComponent from '@/components/CategoriesComponent/CategoriesComponent'
import data from '@/models/es.json'
import NavigationContainer from '@/containers/NavigationContainer/NavigationContainer';
import ProyectsContainer from '@/containers/ProyectsContainer/ProyectsContainer'

export default function HomePage() {
  return (
    <section id={data.homePage.sectionLink} className={styles['container-section-home-page']}>
      <NavigationContainer isHome={true} showUrl={false} url={''} />
      <BannerComponent imgData={data.homePage.banner.image} imgPosition={'homePage'} />
      <SloganComponent />
      <CategoriesComponent />
      <ProyectsContainer />
    </section>
  )
}