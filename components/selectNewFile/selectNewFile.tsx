import styles from './selectNewFile.module.scss'
import {NoteAdd} from "@material-ui/icons";

const SelectNewFile = () => {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.iconContainer}>
                    <NoteAdd style={{fontSize: 100, color: '#D9D9D9'}}/>
                </div>
                <span className={styles.primaryText}>Select New File</span>
                <span className={styles.secondaryText}>or draw and drop, copy and paste file</span>
            </div>
        </div>
    )
}
export default SelectNewFile;