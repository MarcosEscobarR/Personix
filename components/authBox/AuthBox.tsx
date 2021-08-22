import styles from "./AuthBox.module.scss";

interface Props {
    children: any
}

const AuthBox = ({ children } : Props) => {
    return (
        <div className={styles.authContainer}>
            <div className={styles.authCard}>
                { children }
            </div>
        </div>
    )
}

export default AuthBox
