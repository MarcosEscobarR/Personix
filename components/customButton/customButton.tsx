import React from "react";
import styles from './customButton.module.scss'

interface Props {
    title: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>,
}

const CustomButton = ({title, onClick}: Props) => {
    return (
        <button
            className={styles.button}
            onClick={onClick}>{title}</button>
    )
}

export default CustomButton;