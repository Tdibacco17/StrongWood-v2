import styles from './page.module.scss'
import SloganComponent from '@/components/SloganComponent/SloganComponent'
import BannerComponent from '@/components/BannerComponent/BannerComponent'
import CategoriesComponent from '@/components/CategoriesComponent/CategoriesComponent'
import ProyectsComponent from '@/components/ProyectsComponent/ProyectsComponent';
import data from '@/models/es.json'
import NavigationContainer from '@/containers/NavigationContainer/NavigationContainer';
import ServicesComponent from '@/components/ServicesComponent/ServicesComponent';

export default function HomePage() {
  return (
    <section id={data.banner.sectionLink} className={styles['container-section-home-page']}>
      <NavigationContainer isHome={true} />
      <BannerComponent imgData={data.banner.image} />
      <SloganComponent />
      <CategoriesComponent />
      <ProyectsComponent />
      <ServicesComponent />
    </section>
  )
}