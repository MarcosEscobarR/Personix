import {MoreHoriz} from "@material-ui/icons";

interface Props {
    name: string,
    uploadedAt: string,
    haveTranscript: boolean
}

const File = ({name, haveTranscript, uploadedAt}: Props) => {
    return (
        <>
            <div>
                <MoreHoriz/>

                {/*<Image src='/images/fileLogo.svg'/>*/}
                <div>
                    <span>{name}</span>
                    <span>Uploaded: {uploadedAt}</span>
                </div>
                <div>
                    {/*<Image src="/public/images/transcipt.svg"/>*/}
                </div>
            </div>
        </>
    )
}

export default File;
