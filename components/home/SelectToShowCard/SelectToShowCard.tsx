import style from './SelectToShowCard.module.scss';
import {List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {EmojiObjects, FileCopy, LibraryBooks} from "@material-ui/icons";

export function SelectToShowCard() {
    return (
        <div className={style.container}>
            <List>
                <ListItem>
                    <ListItemIcon><FileCopy/></ListItemIcon>
                    <ListItemText>Files</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><EmojiObjects/></ListItemIcon>
                    <ListItemText>Highlights</ListItemText>
                </ListItem>
            </List>
        </div>
    )
}