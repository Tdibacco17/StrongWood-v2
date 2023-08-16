import styles from './page.module.scss'
import SloganComponent from '@/components/SloganComponent/SloganComponent'
import BannerComponent from '@/components/BannerComponent/BannerComponent'
import CategoriesComponent from '@/components/CategoriesComponent/CategoriesComponent'
import data from '@/models/es.json'
import NavigationContainer from '@/containers/NavigationContainer/NavigationContainer';
import ServicesComponent from '@/components/ServicesComponent/ServicesComponent';
import ProyectsContainer from '@/containers/ProyectsContainer/ProyectsContainer';

export default function HomePage() {
  return (
    <section id={data.banner.sectionLink} className={styles['container-section-home-page']}>
      <NavigationContainer isHome={true} />
      <BannerComponent imgData={data.banner.image} />
      <SloganComponent />
      <CategoriesComponent />
      <ProyectsContainer />
      <ServicesComponent />
    </section>
  )
}