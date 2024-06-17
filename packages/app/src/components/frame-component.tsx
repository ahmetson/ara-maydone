import type { NextPage } from 'next'
import styles from './frame-component.module.css'

export type FrameComponentType = {
  className?: string
}

const FrameComponent: NextPage<FrameComponentType> = ({ className = '' }) => {
  return (
    <section className={[styles.portfolioInner, className].join(' ')}>
      <div className={styles.frameParent}>
        <div className={styles.description}>
          <h1 className={styles.projectRealizations}>Project Realizations</h1>
          <div className={styles.inThisWebContainer}>
            <p className={styles.inThisWeb}>
              In this web page we turn ideas into web projects. Ideas turn into project only after getting it’s fund.
            </p>
            <p className={styles.ifYouWant}>
              If you want to turn a idea to page, head to forum, and propose a project in the “2 Maydone” tag. Create a
              poll with the voting for 10 days. If it gets yes, then I will create a web page
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FrameComponent
