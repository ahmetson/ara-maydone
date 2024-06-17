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
