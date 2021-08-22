import styles from "./AuthWhiteBox.module.scss";
import CloseIcon from "@material-ui/icons/Close";

interface Props {
    isLeftSide?: boolean
    children: any
}

const AuthWhiteBox = (props: Props) => {
    return (
        <div className={styles.boxContainer}>
            <CloseIcon className={props.isLeftSide ? styles.closeIconLeft : styles.closeIconRight} fontSize="small" />

            <div>
                { props.children }
            </div>
        </div>
    )
}

export default AuthWhiteBox
