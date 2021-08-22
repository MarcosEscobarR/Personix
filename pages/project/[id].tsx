import {useRouter} from "next/router";
import type {ReactElement} from "react";
import Default from "../../layout/default/default";

const Project = () => {

    const router = useRouter();
    const {id} = router.query;
    return (
        <h1>{id}</h1>
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