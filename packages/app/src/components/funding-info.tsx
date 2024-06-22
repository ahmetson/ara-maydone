import type { NextPage } from 'next'
import styles from './funding-info.module.css'
import { LinkComponent } from './LinkComponent'

export type FundingInfoType = {
  className?: string
}

const FundingInfo: NextPage<FundingInfoType> = ({ className = '' }) => {
  return (
    <div className={[styles.fundingInfo, className].join(' ')}>
      <div className={styles.thisFundingGoesContainer}>
        <p className={styles.thisFundingGoes}>
          This funding goes on Ara. Unlike other projects, Ara is a transparent solution. After funding ends, there will
          be a special page dedicated to this project on Ara Forum. The link to that page will be listed above under
          Parameters section.
        </p>
        <p className={styles.inThePage}>
          In the page, we will inform and provide a link for the game to test and use in every week.
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.ifYouSee}>
          {`If you see no progress there, then you have a full right to stop funding the maintainers. Because maintainers
          don't get all the money instantly, but only as they progress and show it to you.`}
        </p>
      </div>
      <div className={styles.instructionsParent}>
        <div className={styles.instructions}>Instructions</div>
        <div className={styles.knowledge}>
          <div className={styles.requiredAKnowledgeContainer}>
            <ul className={styles.requiredAKnowledgeOnUsing}>
              <li className={styles.requiredAKnowledge}>
                - Required a knowledge on using Cryptocurrencies and Blockchain Wallets.
              </li>
              <li className={styles.requiredMore50}>- Required more 50$ worth ETH cryptocurrency.</li>
              <li className={styles.requiresEthOn}>
                {`- Requires ETH on Linea blockchain. If you don't have then bridge from Ethereum to Linea on` + ' '}
                <LinkComponent
                  href='https://bridge.linea.build'
                  className='text-blue-600 dark:text-blue-500 hover:underline'>
                  bridge.linea.build
                </LinkComponent>
              </li>
              <li>
                - Requires 50$ worth WEF. Swap some of your ETH to WEF on{' '}
                <LinkComponent
                  href='https://www.nile.build/swap?to=0x889400fB9BDE04BFdf353cC718fED3d6dDcF735F'
                  className='text-blue-600 dark:text-blue-500 hover:underline'>
                  Nile Exchange (WEF/ETH)
                </LinkComponent>
              </li>
            </ul>
          </div>
          <div className={styles.perks}>
            <div className={styles.perksForBacking}>Perks for backing:</div>
            <div className={styles.youGetFree}>
              You get free Mad Frogs NFT. You can use this to play the game. Meanwhile you can invest it for a passive
              income at https://stake.frogwifcat.com/ which returns 82% of your investment annually.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FundingInfo
