import styles from './page.module.scss'
import AboutUsComponent from '@/components/AboutUsComponent/AboutUsComponent'
import BannerComponent from '@/components/BannerComponent/BannerComponent'
import CategoriesComponent from '@/components/CategoriesComponent/CategoriesComponent'

export default function HomePage() {
  return (
    <section className={styles['container-section-home-page']}>
      <BannerComponent />
      <AboutUsComponent />
      <CategoriesComponent />
    </section>
  )
}