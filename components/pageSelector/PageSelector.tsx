import styles from './PageSelector.module.scss'
import Image from "next/image";
import LightBulb from "../icons/LightBulb";
import FileIcon from "../icons/FileIcon";

interface Props {
    isHighlightsSelected?: boolean
}

const PageSelector = (props: Props) => {
    const filesClassname = !props.isHighlightsSelected ? styles.selected : ''
    const highlightsClassname = props.isHighlightsSelected ? styles.selected : ''

    return (
        <div className={styles.pageSelector}>
            <div className={styles.option}>
                <FileIcon color={!props.isHighlightsSelected ? '#6B6B6B' : '#D9D9D9'} />
                <span className={filesClassname}>Files</span>
            </div>
            <div className={styles.option}>
                <LightBulb color={props.isHighlightsSelected ? '#6B6B6B' : '#D9D9D9'} />
                <span className={highlightsClassname}>Highlights</span>
            </div>
        </div>
    )
}

export default PageSelector
