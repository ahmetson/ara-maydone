import type { NextPage } from 'next'
import Main from '@/components/main'
import Details from '@/components/details'
import FundingInfo from '@/components/funding-info'
import styles from './index.module.css'

const ProductDetailPage: NextPage = () => {
  return (
    <div className={styles.productDetailPage}>
      <Main />
      <main className={styles.right}>
        <section className={styles.project}>
          <Details status='disconnected' />
          <FundingInfo />
        </section>
      </main>
      <div className={styles.navigationFooter}>
        <div className={styles.dividerWrapper}>
          <div className={styles.divider} />
        </div>
        <footer className={styles.araProjectRealizationsContainer}>
          <p className={styles.araProjectRealizations}>
            Ara Maydone &ndash; is the place where we start a project from any idea you have.
          </p>
          <p className={styles.contactMedetarafoundationF}>Contact medet@ara.foundation for questions!</p>
        </footer>
      </div>
    </div>
  )
}

export default ProductDetailPage
