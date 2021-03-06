interface Props {
    color: string
}

const FileIcon = (props: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12.082" height="14.951" viewBox="0 0 20.082 22.951">
            <path fill={props.color} id="Icon_metro-files-empty" data-name="Icon metro-files-empty" d="M23.635,9.931A20.319,20.319,0,0,0,21.681,7.7a20.327,20.327,0,0,0-2.235-1.954A3.575,3.575,0,0,0,17.408,4.8H9.161A1.8,1.8,0,0,0,7.368,6.59v16.5a1.8,1.8,0,0,0,1.793,1.793H22.788a1.8,1.8,0,0,0,1.793-1.793V11.969a3.575,3.575,0,0,0-.946-2.038Zm-2.968-1.22a19.563,19.563,0,0,1,1.627,1.824H18.843V7.084A19.549,19.549,0,0,1,20.667,8.711Zm2.479,14.375a.363.363,0,0,1-.359.359H9.161a.363.363,0,0,1-.359-.359V6.59a.363.363,0,0,1,.359-.359h8.248v5.02a.717.717,0,0,0,.717.717h5.02ZM16.578,2.874a3.575,3.575,0,0,0-2.038-.946H6.292A1.8,1.8,0,0,0,4.5,3.721v16.5a1.8,1.8,0,0,0,1.434,1.757V3.721a.363.363,0,0,1,.359-.359H17.2c-.216-.178-.426-.342-.626-.489Z" transform="translate(-4.499 -1.928)" />
        </svg>
    )
}

export default FileIcon
