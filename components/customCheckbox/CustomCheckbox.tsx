import styles from './CustomCheckbox.module.scss'
import {useState} from "react";

interface Props {
    label: string
}

const CustomCheckbox = (props: Props) => {
    const [checked, changeCheckedState] = useState(false)

    return (
        <label className={styles.container}>{props.label}
            <input type="checkbox" checked={checked} onChange={() => changeCheckedState(!checked)} />
            <span className={styles.checkmark}></span>
        </label>
    )
}

export default CustomCheckbox
