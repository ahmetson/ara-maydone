import type { NextPage } from 'next'
import Card from './card'
import styles from './project.module.css'

export type ProjectType = {
  className?: string
}

const Project: NextPage<ProjectType> = ({ className = '' }) => {
  return (
    <section className={[styles.project, className].join(' ')}>
      <div className={styles.projects}>
        <Card
          video='/FrogWars.mp4'
          image='/image1@2x.png'
          frogWars='Frog Wars'
          frogWarsIsAFightingGameIn='The first meme coin with the fighting game'
          fundedEndsIn25thJune2024='Fund until 25/06/2024 to ship release in 15/07/2024'
          url='/projects/frog-wars'
        />
        {/* <Card
          image='/image-1@2x.png'
          frogWars='Ara'
          frogWarsIsAFightingGameIn='Ara itself, fund it'
          fundedEndsIn25thJune2024='62% Funded | Ends in 25th June 2026'
          url='/projects/ara'
        /> */}
      </div>
    </section>
  )
}

export default Project
