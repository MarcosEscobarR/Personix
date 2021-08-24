import {useRouter} from "next/router";
import type {ReactElement} from "react";
import Default from "../../layout/default/default";
import styles from './[id].module.scss'
import {Grid, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {EmojiObjects, FileCopy} from "@material-ui/icons";
import Subtitle from "../../components/subtitle/subtitle";
import SelectNewFile from "../../components/selectNewFile/selectNewFile";
import File from "../../components/file/file";
import PageSelector from "../../components/pageSelector/PageSelector";

const Project = () => {

    const router = useRouter();
    const {id} = router.query;

    const files = [
        {
            name: 'Alejandra',
            updatedAt: '05/12'
        },        {
            name: 'Alejandra',
            updatedAt: '05/12'
        },        {
            name: 'Alejandra',
            updatedAt: '05/12'
        },        {
            name: 'Alejandra',
            updatedAt: '05/12'
        },        {
            name: 'Alejandra',
            updatedAt: '05/12'
        },        {
            name: 'Alejandra',
            updatedAt: '05/12'
        },
    ]
    return (
        <div className={styles.container}
        >
            <Grid container spacing={5}>
                <Grid item xs={2}>
                    <PageSelector/>
                </Grid>
                <Grid item xs={9} >
                    <Subtitle subtitle='Your Files'/>
                    <Grid container spacing={2} style={{marginTop: 10}}>
                        <Grid item xs={4}>
                            <div>
                                <SelectNewFile/>
                            </div>
                        </Grid>
                        <Grid item xs={8} className={styles.filesContainer}>
                            {
                                files.map(p => (
                                    <File name={p.name} uploadedAt={p.updatedAt} haveTranscript={true}/>
                                ))
                            }
                        </Grid>
                    </Grid>
                    <div className={styles.learningsContainer}>
                        <Subtitle subtitle='Learnings'/>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

Project.getLayout = function getLayout(page: ReactElement) {
    return (
        <Default>
            {page}
        </Default>
    )
}

export default Project;
