import type { ReactElement } from 'react'
import Empty from '../../layout/empty/empty'
import styles from './index.module.scss'

const Index = () => {
    return (
        <div className={styles.authContainer}>
            <div className={styles.authCard}>
                <div className={styles.firstCol}></div>
                <div className={styles.secondCol}></div>
            </div>
        </div>
    )
} 

Index.getLayout = function getLayout(page: ReactElement) {
    return (
      <Empty>
        {page}
      </Empty>
    )
}

export default Index