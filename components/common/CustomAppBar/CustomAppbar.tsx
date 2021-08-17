import styles from'./CustomAppbar.module.scss';
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import * as React from "react";

export default function CustomAppbar () {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    return (
        <AppBar position={"fixed"} className={styles.appbar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={styles.menuButton}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" noWrap>
                    Responsive drawer
                </Typography>
            </Toolbar>
        </AppBar>
    )
}