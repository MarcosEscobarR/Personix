import {Add} from "@material-ui/icons";
import styles from './newProjectCard.module.scss'
const NewProjectCard = () => {
  return (
      <div className={styles.container}>
          <div className={styles.cardContainer}>
              <Add style={{color: '#D9D9D9', fontSize: 50}}/>
          </div>
          <div className={styles.titleContainer}>
              New
          </div>
      </div>
  )
}

export default NewProjectCard;
