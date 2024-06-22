import type { NextPage } from 'next'
import FrameComponent from '@/components/frame-component'
import Project from '@/components/project'
import styles from './portfolio.module.css'

const Portfolio: NextPage = () => {
  return (
    <div className={styles.portfolio}>
      <FrameComponent />
      <Project />
      <footer className={styles.navigationFooter}>
        <div className={styles.dividerWrapper}>
          <div className={styles.divider} />
        </div>
        <div className={styles.araProjectRealizationsContainer}>
          <p className={styles.araProjectRealizations}>Maydone Launchpad.</p>
          <p className={styles.contactMedetarafoundationF}>Contact medet@ara.foundation for questions!</p>
        </div>
      </footer>
    </div>
  )
}

export default Portfolio
