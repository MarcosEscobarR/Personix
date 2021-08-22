import styles from "./textarea.module.scss";
import React from "react";

interface Props  {
    title: string,
    handleInput(e: React.FormEvent<HTMLInputElement>): void;
}
const TextareaCustom = ({title, handleInput}: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}><span>{title}</span></div>
            <textarea
                className={styles.textarea}
                placeholder={title}
                name={title.toLowerCase()}
                onChange={({target}) => handleInput}/>
        </div>
    )
}

export default TextareaCustom;

