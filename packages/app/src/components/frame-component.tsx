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
          <div className={styles.inThisWebContainer}>
            <h6 className={styles.ifYouWant}>
              Want to start a project with other people? Browse ideas in{' '}
              <a href='https://forum.ara.foundation/t/1-Aurora' className='hover:underline text-blue-600'>
                1 Aurora idea space
              </a>
              . Pick any idea; Prepare a project plan. Then post it in the Forum with the{' '}
              <a href='https://forum.ara.foundation/t/2-Maydone' className='hover:underline text-blue-600'>
                2 Maydone
              </a>{' '}
              tag. Add a voting poll for 10 days. After voting you will see the project here.
            </h6>
          </div>
          <h3 className={'text-red-500'}>Active projects</h3>
        </div>
      </div>
    </section>
  )
}

export default FrameComponent
