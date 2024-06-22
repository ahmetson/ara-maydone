import type { NextPage } from 'next'
import styles from './funding-info.module.css'
import { LinkComponent } from './LinkComponent'
import { ReactElement } from 'react'

export type FundingInfoType = {
  className?: string
  perks?: ReactElement
  instructions?: Array<ReactElement>
}

const FundingInfo: NextPage<FundingInfoType> = ({ className = '', perks, instructions }) => {
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
              {instructions?.map((o, i) => (
                <li className={styles.requiredAKnowledge} key={i}>
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.perks}>
            <div className={styles.perksForBacking}>Perks for backing:</div>
            <div className={styles.youGetFree}>{perks}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FundingInfo
