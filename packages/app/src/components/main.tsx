import type { NextPage } from 'next'
import styles from './main.module.css'

export type MainType = {
  className?: string
}

const Main: NextPage<MainType> = ({ className = '' }) => {
  return (
    <header className={[styles.main, className].join(' ')}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.araLogoParent}>
            <div className={styles.araLogo}>
              <div className={styles.ara}>Ara</div>
              <img className={styles.araLogo1Icon} loading='lazy' alt='' src='/ara-logo-1@2x.png' />
            </div>
            <div className={styles.araProjectRealizations}>Maydone</div>
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
          <button className={styles.button}>
            <div className={styles.connectWallet}>Connect Wallet</div>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Main
