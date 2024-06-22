import type { NextPage } from 'next'
import styles from './details.module.css'
import { LinkComponent } from './LinkComponent'
import React from 'react'

export type DetailsType = {
  className?: string
  params?: DetailsParams
  status: 'disconnected' | 'connected' | 'reconnecting' | 'connecting'
}

export type DetailsParams = {
  image?: string
  video?: string
  aurora?: string
  auroraLink?: string
  maydone?: string
  maydoneLink?: string
  leader?: string
  leaderLink?: string
  productName?: string
  owner?: string
  ownerLink?: string
  description?: React.ReactElement
  notice?: string
  perks?: React.ReactElement
}

const Details: NextPage<DetailsType> = ({ className = '', params, status }) => {
  return (
    <div className={[styles.details, className].join(' ')}>
      <div className={styles.projectImageParent}>
        <div className={styles.projectImage}>
          {params?.video ? (
            <video className={styles.imageIcon} width='740' height='480' preload='auto' autoPlay loop muted playsInline>
              <source src={params?.video} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img className={styles.imageIcon} loading='lazy' alt='' src='/image@2x.png' />
          )}
        </div>
        <div className={styles.parametersParent}>
          <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' style={{ width: '100%' }} />
          <div className={styles.parameters}>Parameters</div>
          <div className={styles.ideaAraAuroraContainer}>
            <p className={styles.ideaAraAurora}>
              Idea:{' '}
              <LinkComponent href={params?.auroraLink!} className='text-blue-600 dark:text-blue-500 hover:underline'>
                Aurora: {params?.aurora}
              </LinkComponent>
            </p>
            <p className={styles.detailsOfThe}>
              Details of the Budget spending is here in Proposal:{' '}
              <LinkComponent href={params?.maydoneLink!} className='text-blue-600 dark:text-blue-500 hover:underline'>
                Maydone: {params?.maydone}
              </LinkComponent>
            </p>
            <p className={styles.maintainerResponsibleFor}>
              Maintainer <i>(responsible for the success of the project)</i>:{' '}
              <LinkComponent href={params?.leaderLink!} className='text-blue-600 dark:text-blue-500 hover:underline'>
                {params?.leader}
              </LinkComponent>
            </p>
          </div>
        </div>
        <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' style={{ width: '100%' }} />
        <div className={styles.whyItsSafe}>{`Why it's safe to fund?`}</div>
      </div>
      <div className={styles.funding}>
        <h1 className={styles.productName}>{params?.productName}</h1>
        <div className={styles.subheading}>
          by{' '}
          <a href={params?.ownerLink!} target='_blank' className='text-blue-600 dark:text-blue-500 hover:underline'>
            {params?.owner}
          </a>
        </div>
        <div className={styles.price}>$50</div>
        <div className={'mb-1 flex flex-col'}>
          <p className='font-medium text-blue-700 dark:text-white'>Goal: 700$</p>
          <p className='font-medium text-blue-700 dark:text-white'>Deadline: 25th June 2024</p>
        </div>
        <div className='w-full bg-gray-200 rounded-full dark:bg-gray-700'>
          <div
            className='bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full'
            style={{ width: '45%' }}>
            45%
          </div>
        </div>
        <div className={styles.description}>
          <p className={styles.frogWarsIs}>{params?.description}</p>
        </div>
        {status === 'connected' ? (
          <button className={styles.button}>
            <div className={styles.backThisProject}>Back this project</div>
          </button>
        ) : (
          <button className={styles.disabledButton} disabled>
            <div className={styles.backThisProject}>Connect Wallet</div>
          </button>
        )}
        <div className={styles.thisProjectRequiresContainer}>
          <p className={styles.thisProjectRequires}>{params?.notice}</p>
        </div>
        <div className={styles.perksForBacking}>Perks for backing:</div>
        <div className={styles.youGetFree}>{params?.perks}</div>
      </div>
    </div>
  )
}

export default Details
