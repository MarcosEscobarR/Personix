import styles, {fullWidth} from './CustomButton.module.scss'

interface Props {
    text: string,
    filled?: boolean,
    fullWidth?: boolean
    onClick?: () => void
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
        <button className={classesToApply} onClick={props.onClick}>{ props.text }</button>
    )
}

export default CustomButton;
