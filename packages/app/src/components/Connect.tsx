import React from 'react'
import styles from './main.module.css'

export function Connect() {
  return (
    <div className={styles.buttons}>
      <w3m-button label='Connect' balance='hide' size='sm' />
    </div>
  )
}
