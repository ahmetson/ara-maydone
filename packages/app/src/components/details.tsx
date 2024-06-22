'use client'
import type { NextPage } from 'next'
import styles from './details.module.css'
import { LinkComponent } from './LinkComponent'
import React, { useEffect, useState } from 'react'
import { TokenQuantityInput, taxedAmount } from './TokenQuantityInput'
import { formatBalance } from '@/utils/formatBalance'
import { useAccount, useSimulateContract, useWaitForTransactionReceipt, useWriteContract } from 'wagmi'
import { araTokenAddress, projectCheckTokenAddress } from '@/abis'
import { erc20Abi } from 'viem'
import { useNotifications } from '@/context/Notifications'
import { useRouter } from 'next/navigation'
import { FROG_WARS_CHAIN_ID } from '@/utils/projects'

export type DetailsType = {
  className?: string
  params?: DetailsParams
  status: 'disconnected' | 'connected' | 'reconnecting' | 'connecting'
  maydoneParams?: MaydoneParams
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

export type MaydoneParams = {
  currency?: string
  deadline?: number
  goal?: bigint
  required?: bigint
  goalReached?: boolean
  tax?: number
}

const Details: NextPage<DetailsType> = ({ className = '', params, status, maydoneParams }) => {
  const [amount, setAmount] = useState('0.00')
  const { Add } = useNotifications()

  const { error: estimateError } = useSimulateContract({
    address: araTokenAddress[FROG_WARS_CHAIN_ID],
    abi: erc20Abi,
    functionName: 'transfer',
    args: [projectCheckTokenAddress[FROG_WARS_CHAIN_ID], taxedAmount(amount, maydoneParams?.tax)],
  })
  const router = useRouter()

  const { data, writeContract } = useWriteContract()
  const { chain } = useAccount()

  const {
    isLoading,
    error: txError,
    isSuccess: txSuccess,
  } = useWaitForTransactionReceipt({
    hash: data,
  })

  let percentage = '0'
  let goalFloat = '0'
  if (maydoneParams && maydoneParams.goal && maydoneParams.required) {
    const goal = maydoneParams?.goal!
    const required = maydoneParams?.required!
    const perPercent = goal / BigInt(100)
    const left = BigInt(goal) - BigInt(required)
    percentage = (parseFloat(left.toString()) / parseFloat(perPercent.toString())).toFixed(2)
    goalFloat = (goal / BigInt(1e18)).toString()
    console.log(`Goal: ${goal}, required: ${required}, ${percentage}, float: ${goalFloat}`)
  }

  const handleSendTransation = () => {
    if (estimateError) {
      Add(`Transaction failed: ${estimateError.cause}`, {
        type: 'error',
      })
      return
    }
    writeContract({
      address: araTokenAddress[FROG_WARS_CHAIN_ID],
      abi: erc20Abi,
      functionName: 'transfer',
      args: [projectCheckTokenAddress[FROG_WARS_CHAIN_ID], taxedAmount(amount, maydoneParams?.tax)],
    })
  }

  useEffect(() => {
    if (txSuccess) {
      Add(`Transaction successful`, {
        type: 'success',
        href: chain?.blockExplorers?.default.url ? `${chain.blockExplorers.default.url}/tx/${data}` : undefined,
      })
      router.refresh()
    } else if (txError) {
      Add(`Transaction failed: ${txError.cause}`, {
        type: 'error',
      })
    }
  }, [txSuccess, txError])

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
        <div className={styles.price}>
          <label className='form-control w-full max-w-xs'>
            <div className='label'>
              <span className='label-text'>Enter your investment {maydoneParams?.currency}</span>
            </div>
            <TokenQuantityInput
              onChange={setAmount}
              quantity={amount}
              maxValue={formatBalance(maydoneParams?.required ?? BigInt(0))}
            />
          </label>
        </div>
        <div className={'mb-1 flex flex-col'}>
          <p className='font-medium text-blue-700 dark:text-white'>Goal: {goalFloat + ' ' + maydoneParams?.currency}</p>
          <p className='font-medium text-blue-700 dark:text-white'>
            Deadline: {new Date(maydoneParams?.deadline! * 1000).toISOString()}
          </p>
        </div>
        <div className='w-full bg-gray-200 rounded-full dark:bg-gray-700'>
          <div
            className='bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full'
            style={maydoneParams?.goalReached ? { width: '100%' } : { width: percentage + '%' }}>
            {maydoneParams?.goalReached ? '100%' : percentage + '%'}
          </div>
        </div>
        <div className={styles.description}>
          <p className={styles.frogWarsIs}>{params?.description}</p>
        </div>
        {status === 'connected' ? (
          maydoneParams?.goalReached ? (
            <button className={styles.disabledButton} disabled>
              <div className={styles.backThisProject}>Goal reached</div>
            </button>
          ) : (
            <button className={styles.button} onClick={handleSendTransation}>
              <div className={styles.backThisProject}>
                {isLoading ? <span className='loading loading-dots loading-sm'></span> : 'Back this project'}
              </div>
            </button>
          )
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
