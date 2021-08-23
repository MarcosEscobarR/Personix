import React from "react";
import {Home, HomeOutlined} from "@material-ui/icons";
import {fontSize} from "@material-ui/system";
const  Default: React.FC = ({children}) => {
    return (
        <>
            <body>
            <input type="checkbox" id="drawer-toggle" name="drawer-toggle"/>
            <label htmlFor="drawer-toggle" id="drawer-toggle-label"/>
            <header>Home</header>
            <nav id="drawer">
                <ul>
                    <li><a href="#"><HomeOutlined style={{fontSize: 50}}/></a></li>
                </ul>
            </nav>
            <div id="page-content">
                {children}
            </div>
            </body>
        </>
    )
}

export default Default
