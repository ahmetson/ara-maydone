'use client'

import styles from '@/assets/index.module.css'
import { LinkComponent } from '@/components/LinkComponent'
import Details, { DetailsParams, DetailsType } from '@/components/details'
import FundingInfo from '@/components/funding-info'
import { ReactElement, useEffect, useState } from 'react'
import { useAccount, useBalance, useReadContract, useSimulateContract } from 'wagmi'
import { projectCheckTokenAddress, projectCheckTokenAbi, araTokenAddress } from '@/abis'
import { erc20Abi, parseEther } from 'viem'

// Blockchain parameters
const projectId = 1 // FrogWars project ID on Check Token
export const chainId = 59141
const deadline = 1721408400 // 25 June
const currency = 'WEF'
const tax = 1.0 // percentage

export default function Home() {
  const { status, chain } = useAccount()
  const [goalAmount, setGoalAmount] = useState<bigint>(BigInt(0))
  const [mintedAmount, setMintedAmount] = useState<bigint>(BigInt(0))
  const [requiredAmount, setRequiredAmount] = useState<bigint>(BigInt(0))
  const [goalReached, setGoalReached] = useState<boolean>(false)

  const { data: projectInfo } = useReadContract({
    query: {
      enabled: chain?.id != undefined && status == 'connected',
    },
    address: projectCheckTokenAddress[chainId],
    abi: projectCheckTokenAbi,
    functionName: 'projects',
    args: [BigInt(projectId)],
  })

  const { data: balanceData } = useBalance({
    token: araTokenAddress[chainId],
    address: projectCheckTokenAddress[chainId],
  })

  useEffect(() => {
    if (!projectInfo?.[6]!) {
      setGoalAmount(projectInfo?.[1]!)
      setMintedAmount(projectInfo?.[5]!)
    }
  }, [projectInfo])

  useEffect(() => {
    if (!balanceData || !mintedAmount || !goalAmount) {
      return
    }
    const val = goalAmount - mintedAmount
    if (balanceData.value >= val) {
      setGoalReached(true)
    } else {
      setRequiredAmount(val - balanceData.value)
    }
  }, [goalAmount, mintedAmount, balanceData])

  const details: DetailsParams = {
    video: '/FrogWars.mp4',
    aurora: 'Frog Wars - a fighting game',
    auroraLink: 'https://forum.ara.foundation/d/16-frog-wars-a-fighting-game',
    maydone: 'Frog Wars - a fighting game proposal',
    maydoneLink: 'https://forum.ara.foundation/d/19-frog-wars-a-fighting-game-proposal',
    leader: 'Medet Ahmetson',
    leaderLink: 'https://forum.ara.foundation/u/ahmetson',
    productName: 'Frog Wars',
    owner: 'Dao.FrogWifCat',
    ownerLink: 'https://dao.frogwifcat.com/',
    description: (
      <>
        Frog Wars is the fighting game with the Mad Frogs NFTs.
        <br />
        goal of this launchpad is to create a multiplayer fighting game.
      </>
    ),
    notice:
      'This project requires WEF crypto on Linea network. Purchase WEF token on Nile Exchange, after setting up your Linea account.',
    perks: (
      <>
        You get free Mad Frogs NFT. You can use this to play the game. Meanwhile you can invest it for a passive income
        at{' '}
        <a
          href='https://stake.frogwifcat.com/'
          target='_blank'
          className='text-blue-600 dark:text-blue-500 hover:underline'
          style={{ display: 'contents' }}>
          MF Stake
        </a>{' '}
        which returns 82% of your investment annually.
      </>
    ),
  }

  const instructions: Array<ReactElement> = new Array<ReactElement>()
  instructions.push(<>- Required a knowledge on using Cryptocurrencies and Blockchain Wallets.</>)
  instructions.push(
    <>
      {`- Requires ETH on Linea blockchain. If you don't have then bridge from Ethereum to Linea on` + ' '}
      <LinkComponent href='https://bridge.linea.build' className='text-blue-600 dark:text-blue-500 hover:underline'>
        bridge.linea.build
      </LinkComponent>
    </>
  )
  instructions.push(
    <>
      - Requires 50$ worth WEF. Swap some of your ETH to WEF on{' '}
      <LinkComponent
        href='https://www.nile.build/swap?to=0x889400fB9BDE04BFdf353cC718fED3d6dDcF735F'
        className='text-blue-600 dark:text-blue-500 hover:underline'>
        Nile Exchange (WEF/ETH)
      </LinkComponent>
    </>
  )

  return (
    <div className={styles.right}>
      <div className={styles.project}>
        <div
          className=' w-full p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 text-center'
          role='alert'>
          <span className='font-medium'>No wallet!</span> Connect your wallet to see project details.
        </div>
        <Details
          params={details}
          status={status}
          maydoneParams={{ goalReached, goal: goalAmount, required: requiredAmount, deadline, currency, tax }}
        />
        <FundingInfo perks={details.perks} instructions={instructions} />
      </div>
    </div>
  )
}
