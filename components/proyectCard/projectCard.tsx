import styles from './projectCard.module.scss'
import {BarChart, MoreHoriz} from "@material-ui/icons";

interface Props {
    title: string,
    color: string,
}
const ProjectCard = ({title, color}: Props) => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.cardContainer} style={{background: color}}>
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
