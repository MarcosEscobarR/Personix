import styles from './subtitle.module.scss'
interface Props {
    subtitle: string
}

const Subtitle = ({subtitle}: Props) => {
    return (
        <div className={styles.container}>
            <span className={styles.subtitle}>{subtitle}</span>
            <hr className={styles.hr}/>
        </div>
    )

}

export default Subtitle;