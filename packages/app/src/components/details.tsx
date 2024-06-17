import type { NextPage } from 'next'
import styles from './details.module.css'
import { LinkComponent } from './LinkComponent'

export type DetailsType = {
  className?: string
}

const Details: NextPage<DetailsType> = ({ className = '' }) => {
  return (
    <div className={[styles.details, className].join(' ')}>
      <div className={styles.projectImageParent}>
        <div className={styles.projectImage}>
          <img className={styles.imageIcon} loading='lazy' alt='' src='/image@2x.png' />
        </div>
        <div className={styles.parametersParent}>
          <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' style={{ width: '100%' }} />
          <div className={styles.parameters}>Parameters</div>
          <div className={styles.ideaAraAuroraContainer}>
            <p className={styles.ideaAraAurora}>
              Idea:{' '}
              <LinkComponent
                href='https://forum.ara.foundation/d/16-frog-wars-a-fighting-game'
                className='text-blue-600 dark:text-blue-500 hover:underline'>
                Aurora: Frog Wars - a fighting game
              </LinkComponent>
            </p>
            <p className={styles.detailsOfThe}>
              Details of the Budget spending is here in Proposal:{' '}
              <LinkComponent
                href='https://forum.ara.foundation/d/19-frog-wars-a-fighting-game-proposal'
                className='text-blue-600 dark:text-blue-500 hover:underline'>
                Maydone: Frog Wars - a fighting game proposal
              </LinkComponent>
            </p>
            <p className={styles.maintainerResponsibleFor}>
              Maintainer <i>(responsible for your success of the game)</i>:{' '}
              <LinkComponent
                href='https://forum.ara.foundation/u/ahmetson'
                className='text-blue-600 dark:text-blue-500 hover:underline'>
                Medet Ahmetson
              </LinkComponent>
            </p>
          </div>
        </div>
        <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' style={{ width: '100%' }} />
        <div className={styles.whyItsSafe}>Why it's safe to fund?</div>
      </div>
      <div className={styles.funding}>
        <h1 className={styles.productName}>Frog Wars</h1>
        <div className={styles.subheading}>
          by{' '}
          <a
            href='https://dao.frogwifcat.com/'
            target='_blank'
            className='text-blue-600 dark:text-blue-500 hover:underline'>
            Dao FrogWifCat
          </a>
        </div>
        <div className={styles.price}>$50</div>
        <div className={'mb-1 flex justify-between'}>
          <span className='font-medium text-blue-700 dark:text-white'>Pledged Goal to initiate: 700$</span>
          <span>{'        '}</span>
          <span className='font-medium text-blue-700 dark:text-white'>Until 25th June 2024</span>
        </div>
        <div className='w-full bg-gray-200 rounded-full dark:bg-gray-700'>
          <div
            className='bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full'
            style={{ width: '45%' }}>
            45%
          </div>
        </div>
        <div className={styles.description}>
          <p className={styles.frogWarsIs}>Frog Wars is the fighting game with the Mad Frogs NFTs.</p>
          <p className={styles.hereWeWant}>The goal of this launchpad is to create a multiplayer fighting game.</p>
        </div>
        <button className={styles.button}>
          <div className={styles.backThisProject}>Back this project</div>
        </button>
        <div className={styles.thisProjectRequiresContainer}>
          <p className={styles.thisProjectRequires}>This project requires WEF crypto on Linea network.</p>
          <p className={styles.purchaseWefToken}>
            Purchase WEF token on Nile Exchange, after setting up your Linea account.
          </p>
        </div>
        <div className={styles.perksForBacking}>Perks for backing:</div>
        <div className={styles.youGetFree}>
          You get free Mad Frogs NFT. You can use this to play the game. Meanwhile you can invest it for a passive
          income at{' '}
          <a
            href='https://stake.frogwifcat.com/'
            target='_blank'
            className='text-blue-600 dark:text-blue-500 hover:underline'
            style={{ display: 'contents' }}>
            MF Stake
          </a>{' '}
          which returns 82% of your investment annually.
        </div>
      </div>
    </div>
  )
}

export default Details
