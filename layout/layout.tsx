import {
    CssBaseline
} from "@material-ui/core";
import * as React from "react";
import CustomAppbar from "../components/common/CustomAppBar/CustomAppbar";
import {CustomDrawer} from "../components/common/Drawer/Drawer";

export function Layout({children}) {
    return (
        <div className="root">
            <CssBaseline/>
            <CustomAppbar/>
            <CustomDrawer/>
            {children}
        </div>
    )
}