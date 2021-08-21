import React from "react";
import {Home, HomeOutlined} from "@material-ui/icons";
const  Default: React.FC = ({children}) => {
    return (
        <>
            <body>
            <input type="checkbox" id="drawer-toggle" name="drawer-toggle"/>
            <label htmlFor="drawer-toggle" id="drawer-toggle-label"/>
            <header>Personix</header>
            <nav id="drawer">
                <div className='menu-items'>
                    <ul>
                        <li><a href="#"><HomeOutlined style={{fontSize: 40}}/></a></li>
                    </ul>
                </div>
            </nav>
            <div id="page-content">
                {children}
            </div>
            </body>
        </>
    )
}

export default Default
