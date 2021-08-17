import React from 'react'
import styles from './index.module.css'

const Index: React.FC = () => {
    return (
        <div className={styles.authContainer}>
            <div className={styles.authCard}>
                <div className={styles.firstCol}></div>
                <div className={styles.secondCol}></div>
            </div>
        </div>
    )
} 

export default Index