import styles from '@/assets/index.module.css'
import Details from '@/components/details'
import FundingInfo from '@/components/funding-info'

export default function Home() {
  return (
    <div className={styles.right}>
      <div className={styles.project}>
        <div
          className=' w-full p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 text-center'
          role='alert'>
          <span className='font-medium'>No wallet!</span> Connect your wallet to see project details.
        </div>
        <Details />
        <FundingInfo />
      </div>
    </div>
  )
}
