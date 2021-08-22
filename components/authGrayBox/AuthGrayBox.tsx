import React from "react";
import styles from "./AuthGrayBox.module.scss";
import Image from "next/image";

interface Props {
    isLeftSide?: boolean
    children: any
}

const AuthGrayBox = (props: Props) => {
    return (
        <div className={styles.boxContainer}>
            <div className={props.isLeftSide ? styles.logoLeft : styles.logoRight}>
                <Image src="/images/logo.svg" width={25} height={25} alt="logo"/>
            </div>

            <div className={styles.box}>
                {props.children}
            </div>
        </div>
    )
}

export default AuthGrayBox
