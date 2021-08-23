import styles from './newProjectCard.module.scss'

import {Add} from "@material-ui/icons";
import {useState} from "react";
import NewProjectDialog from "../NewProjectDialog/NewProjectDialog";

const NewProjectCard = () => {
    const [open, setOpen] = useState(false)
    const handleClickEvent = () => {
        setOpen(!open);
    }
  return (
      <>
          <div className={styles.container} onClick={handleClickEvent}>
              <div className={styles.cardContainer}>
                  <Add style={{fontSize: 50, color: '#D9D9D9'}}/>
              </div>
              <div className={styles.titleContainer}>
                  <span>New</span>
              </div>
          </div>
          <NewProjectDialog open={open}  setOpen={setOpen}/>
      </>
  )
};

export default NewProjectCard;
