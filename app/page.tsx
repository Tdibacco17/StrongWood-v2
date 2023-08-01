import styles from './page.module.scss'
import AboutUsComponent from '@/components/AboutUsComponent/AboutUsComponent'
import BannerComponent from '@/components/BannerComponent/BannerComponent'
// import ProjectsComponent from '@/components/ProjectsComponent/ProjectsComponent'
import CategoriesComponent from '@/components/CategoriesComponent/CategoriesComponent'

export default function HomePage() {
  return (
    <section className={styles['container-section-homepage']}>
      <BannerComponent />
      <AboutUsComponent />
      <CategoriesComponent />
      {/* <ProjectsComponent />  */}
    </section>
  )
}