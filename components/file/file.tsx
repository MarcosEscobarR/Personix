import {MoreHoriz} from "@material-ui/icons";
import Image from "next/image";
import styles, {description} from './file.module.scss'

interface Props {
    name: string,
    uploadedAt: string,
    haveTranscript: boolean
}

const File = ({name, haveTranscript, uploadedAt}: Props) => {
    return (
        <>
            <div className={styles.container}>
                <MoreHoriz style={{color: '#D9D9D9', margin: 5}}/>
                <Image src='/images/fileLogo.svg' width={35} height={35} alt="logo"/>
                <div className={styles.titleContainer}>
                    <span>{name}</span>
                    <span className={styles.description}>Uploaded: {uploadedAt}</span>
                </div>
                <div className={styles.transcriptIcon}>
                    <Image src="/images/transcript.svg" width={55} height={55} alt="logo"/>
                </div>
            </div>
            <hr className={styles.hr}/>
        </>
    )
}

export default File;
