import React from "react";
import styles from './InputText.module.scss'
interface Props {
    title: string,
    handleInput(e: React.FormEvent<HTMLInputElement>): void;
    type: string
}

const InputText = ({title, handleInput, type}: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}><span>{title}</span></div>
            <input
                className={styles.input}
                type={type.toString()}
                placeholder={title}
                name={title.toLowerCase()}
                onChange={({target}) => handleInput}/>
        </div>
    )
}

export default InputText;