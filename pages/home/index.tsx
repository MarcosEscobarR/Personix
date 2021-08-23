import type { ReactElement } from 'react'
import  Default  from '../../layout/default/default'
import styles from "./index.module.scss"
import SelectNewFile from "../../components/selectNewFile/selectNewFile";
import Subtitle from "../../components/subtitle/subtitle";
import ProjectCard from "../../components/proyectCard/projectCard";
import NewProjectCard from "../../components/newProjectCard/newProjectCard";

const projects = [
    {
        title: 'Project 1',
        color: '#ebba34'
    },{
        title: 'Project 2',
        color: '#80afe8'

    },{
        title: 'Project 3',
        color: '#9cf0c2'

    },{
        title: 'Project 4',
        color: '#d0b9fa'

    },{
        title: 'Project 5',
        color: '#ebba34'

    },{
        title: 'Project 6',
        color: '#80afe8'

    },
]

const Index = () => {
    return (
        <div className={styles.container}>
            <div>
                <SelectNewFile/>
                <Subtitle subtitle='Projects'/>
            </div>
            <div className={styles.projectsContainer}>
                {
                    projects.map(p => (
                        <ProjectCard title={p.title} color={p.color}/>
                    ))
                }
                <NewProjectCard/>
            </div>
        </div>
    )
}

Index.getLayout = function getLayout(page: ReactElement) {
    return (
      <Default>
        {page}
      </Default>
    )
}

export default Index;
