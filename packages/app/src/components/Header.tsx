import React from 'react'
import type { NextPage } from 'next'
import { LinkComponent } from './LinkComponent'
import { SITE_EMOJI } from '@/utils/site'
import { Connect } from './Connect'
import { NotificationsDrawer } from './NotificationsDrawer'
import styles from './main.module.css'
export type MainType = {
  className?: string
}

export const Header: NextPage<MainType> = ({ className = '' }) => {
  return (
    <header className={[styles.main, className].join(' ')}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.araLogoParent}>
            <div className={styles.araLogo}>
              <div className={styles.ara}>Ara</div>
              <img className={styles.araLogo1Icon} loading='lazy' alt='' src='/ara-logo-1@2x.png' />
            </div>
            <div className={styles.araProjectRealizations}>Ara project realizations</div>
          </div>
        </div>

        <nav className={styles.navigation}>
          <div className={styles.buttons}>
            <div className={styles.guide}>Guide</div>
          </div>
          <div className={styles.buttons1}>
            <div className={styles.forum}>Forum</div>
          </div>
          <div className={styles.buttons2}>
            <div className={styles.ara1}>Ara</div>
          </div>
          <Connect />
          <NotificationsDrawer />
        </nav>
      </div>
    </header>
  )
}
