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
          <LinkComponent href='/'>
            <div className={styles.araLogoParent}>
              <div className={styles.araLogo}>
                <div className={styles.ara}>. . . . .</div>
                <img className={styles.araLogo1Icon} loading='lazy' alt='' src='/ara-logo-1@2x.png' />
              </div>
              <div className={styles.araProjectRealizations}>Ara project realizations</div>
            </div>
          </LinkComponent>
        </div>

        <nav className={styles.navigation}>
          <div className={styles.buttons}>
            <LinkComponent href='https://forum.ara.foundation/d/1-must-read-ara-forum-guideline'>
              <div className={styles.guide + ' hover:underline'}>Guide</div>
            </LinkComponent>
          </div>
          <div className={styles.buttons1}>
            <LinkComponent href='https://forum.ara.foundation/'>
              <div className={styles.forum + ' hover:underline'}>Forum</div>
            </LinkComponent>
          </div>
          <div className={styles.buttons2}>
            <LinkComponent href='https://ara.foundation/'>
              <div className={styles.ara1 + ' hover:underline'}>Ara</div>
            </LinkComponent>
          </div>
          <Connect />
          <NotificationsDrawer />
        </nav>
      </div>
    </header>
  )
}
