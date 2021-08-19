import type { ReactElement } from 'react'
import { Layout } from '../../layout/layout'
import styles from "./index.module.css"
import {SelectToShowCard} from "../../components/home/SelectToShowCard/SelectToShowCard";

const Index = () => {
    return (
        <div className={styles.container}>
            <SelectToShowCard/>
        </div>
    )
}

Index.getLayout = function getLayout(page: ReactElement) {
    return (
      <Layout>
        {page}
      </Layout>
    )
}

export default Index;