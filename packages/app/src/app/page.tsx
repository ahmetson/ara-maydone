import { CardList } from '@/components/CardList'
import { SITE_DESCRIPTION, SITE_NAME } from '@/utils/site'
import { EXAMPLE_ITEMS } from './examples/examples'
// import styles from '@/assets/index.module.css'
import Details from '@/components/details'
import FundingInfo from '@/components/funding-info'

import type { NextPage } from 'next'
import FrameComponent from '@/components/frame-component'
import Project from '@/components/project'
import styles from '@/assets/index.module.css'

export default function Home() {
  return (
    <div className={styles.right}>
      <div className={styles.project}>
        <FrameComponent />
        <Project />
      </div>
    </div>
  )
}
