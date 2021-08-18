import React from "react";
import styles from "./index.module.css"
import {SelectToShowCard} from "../../components/home/SelectToShowCard/SelectToShowCard";

const Index: React.FC = () => {
    return (
        <div className={styles.container}>
            <SelectToShowCard/>
        </div>
    )
}

export default Index;