import styles from './CustomCheckbox.module.scss'

interface Props {
    label: string
}

const CustomCheckbox = (props: Props) => {
    return (
        <label className={styles.container}>{props.label}
            <input type="checkbox" checked={false} />
            <span className={styles.checkmark}></span>
        </label>
    )
}

export default CustomCheckbox
