import styles from './empty.module.scss';

const Empty: React.FC = ({ children }) => {
    return (
        <div className={styles.container} >{ children }</div>
    )
}

export default Empty;