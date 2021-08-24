import styles from './PageSelector.module.scss'

const PageSelector = () => {
    return (
        <div className={styles.pageSelector}>
            <span>Files</span>
            <span className={styles.selected}>Highlights</span>
        </div>
    )
}

export default PageSelector
