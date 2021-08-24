import { withStyles } from '@material-ui/core/styles';
import {Menu, MenuItem, MenuProps} from "@material-ui/core";
import React from "react";
import styles from './tagsMenu.module.scss'

interface Tags {
    id: number,
    name: string,
    color: string
}

interface Props {
    tags: Tags[]
}

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props: MenuProps) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

const TagsMenu = ({tags}: Props) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
      setAnchorEl(null)
    }
    return (
        <>
            <div className={styles.menuItemContainer} onClick={handleClick}>
                <div><span>{tags[0].name}</span></div>
            </div>
            <StyledMenu
                id='Menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                {
                    tags.map(p => (
                        <StyledMenuItem>
                            <div>
                                <div>{p.name}</div>
                            </div>
                        </StyledMenuItem>
                    ))
                }
            </StyledMenu>
        </>
    )
}

export default TagsMenu;
