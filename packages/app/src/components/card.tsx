import type { NextPage } from 'next'
import styles from './card.module.css'
import { LinkComponent } from './LinkComponent'

export type CardType = {
  className?: string
  image?: string
  frogWars?: string
  frogWarsIsAFightingGameIn?: string
  fundedEndsIn25thJune2024?: string
  url: string
}

const Card: NextPage<CardType> = ({
  className = '',
  image,
  frogWars,
  frogWarsIsAFightingGameIn,
  fundedEndsIn25thJune2024,
  url,
}) => {
  return (
    <div className={[styles.card, className].join(' ')}>
      <img className={styles.imageIcon} loading='lazy' alt='' src={image} />
      <div className={styles.copy}>
        <div className={styles.frogWars}>{frogWars}</div>
        <div className={styles.frogWarsIs}>{frogWarsIsAFightingGameIn}</div>
        <div className={styles.fundedEnds}>{fundedEndsIn25thJune2024}</div>
      </div>
      <button className={styles.button}>
        <LinkComponent href={url}>
          <div className={styles.viewProject}>View Project</div>
        </LinkComponent>
      </button>
    </div>
  )
}

export default Card
