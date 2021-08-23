import styles from './subtitle.module.scss'
interface Props {
    subtitle: string,
    analysisInformation? :string
}

const Subtitle = ({subtitle, analysisInformation}: Props) => {
    return (
        <>
            <div className={styles.container}>
                <span className={styles.subtitle}>{subtitle}</span>

                {
                    analysisInformation ? <span className={styles.analysisInformation}>{analysisInformation}</span>: ''
                }
            </div>
            <hr className={styles.hr}/>

        </>
    )

}

export default Subtitle;
