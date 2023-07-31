import styles from './page.module.scss'
import AboutUsComponent from '@/components/AboutUsComponent/AboutUsComponent'
import BannerComponent from '@/components/BannerComponent/BannerComponent'
import ProjectsComponent from '@/components/ProjectsComponent/ProjectsComponent'
import ServicesComponent from '@/components/ServicesComponent/ServicesComponent'

export default function HomePage() {
  return (
    <section className={styles['container-section-homepage']}>
      <BannerComponent />
      <AboutUsComponent />
      <ServicesComponent />
      <ProjectsComponent />
    </section>
  )
}