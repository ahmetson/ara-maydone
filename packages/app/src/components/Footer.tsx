import React from 'react'
import { SITE_EMOJI, SITE_INFO, SOCIAL_GITHUB, SOCIAL_TWITTER } from '@/utils/site'
import { FaGithub, FaXTwitter } from 'react-icons/fa6'
import { NetworkStatus } from './NetworkStatus'
import { LinkComponent } from './LinkComponent'
import styles from '@/assets/index.module.css'

export function Footer() {
  return (
    <div className={styles.navigationFooter}>
      <div className={styles.dividerWrapper}>
        <div className={styles.divider} />
      </div>
      <footer className={styles.araProjectRealizationsContainer}>
        <p className={styles.araProjectRealizations}>Ara Maydone &ndash; funding projects.</p>
        <p className={styles.contactMedetarafoundationF}>Contact medet@ara.foundation for questions!</p>
      </footer>
    </div>
  )
}
