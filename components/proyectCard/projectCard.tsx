import styles from './projectCard.module.scss'
import {BarChart, MoreHoriz} from "@material-ui/icons";

interface Props {
    title: string
}
const ProjectCard = ({title}: Props) => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.cardContainer}>
                    <div className={styles.optionContainer}>
                        <MoreHoriz style={{color: '#ffff', justifyContent: 'end'}}/>
                    </div>
                    <div className={styles.iconContainer}>
                        <BarChart style={{fontSize: 80, color: '#ffff'}}/>
                    </div>
                </div>
                <div className={styles.titleContainer}>
                    {title}
                </div>
            </div>
        </>
    )
}

export default ProjectCard;