import styles from './page.module.scss'
import BannerComponent from '@/components/BannerComponent/BannerComponent'
import ServicesComponent from '@/components/ServicesComponent/ServicesComponent'

export default function HomePage() {
  return (
    <section className={styles['container-section-homepage']}>
      <BannerComponent />
      <ServicesComponent />
    </section>
  )
}