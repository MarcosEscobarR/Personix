import {withStyles} from "@material-ui/styles";
import {Menu, MenuItem, MenuProps} from "@material-ui/core";
import React from "react";

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
    }
})((props: MenuProps) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "center"
        }}
        {...props}
        />
))

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        }
    }
}))(MenuItem)

const TagsMenu = ({tags}: Props) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    }

    const handleCloset = () => {
      setAnchorEl(null)
    }
    return (
        <>
            
        </>
    )
}

export default TagsMenu;
