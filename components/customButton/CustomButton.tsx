import styles, {fullWidth} from './CustomButton.module.scss'

interface Props {
    text: string,
    filled?: boolean,
    fullWidth?: boolean
}

const CustomButton = (props: Props) => {
    let classesToApply = `${styles.pillButton}`

    if (props.fullWidth) {
        classesToApply += ` ${styles.fullWidth}`
    }

    if (props.filled) {
        classesToApply += ` ${styles.filled}`
    }

    return (
        <button className={classesToApply}>{ props.text }</button>
    )
}

export default CustomButton;
