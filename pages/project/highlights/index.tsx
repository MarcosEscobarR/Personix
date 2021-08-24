import {ReactElement} from "react";
import Default from "../../../layout/default/default";
import styles from "./index.module.scss";
import {createTheme} from "@material-ui/core/styles";
import PageSelector from "../../../components/pageSelector/PageSelector";

const index = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftColumn}>
                <PageSelector />
            </div>
        </div>
    )
}

index.getLayout = function getLayout(page: ReactElement) {
    return (
        <Default>
            {page}
        </Default>
    )
}

export default index
