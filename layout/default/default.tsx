import React from "react";
import {Home} from "@material-ui/icons";
const  Default: React.FC = ({children}) => {
    return (
        <>
            <body>
            <input type="checkbox" id="drawer-toggle" name="drawer-toggle"/>
            <label htmlFor="drawer-toggle" id="drawer-toggle-label"/>
            <header>Personix</header>
            <nav id="drawer">
                <ul>
                    <li><a href="#"><Home/></a></li>
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
