import styles from '@/assets/index.module.css'
import Details from '@/components/details'
import FundingInfo from '@/components/funding-info'

export default function Home() {
  return (
    <div>
      <main className={styles.right}>
        <section className={styles.project}>
          <Details />
          <FundingInfo />
        </section>
      </main>
    </div>
  )
}
