import React from "react";
import styles from './default.module.scss'
const  Default: React.FC = ({children}) => {
    return (
        <>
            <body>
            <input type="checkbox" id="drawer-toggle" name="drawer-toggle"/>
            <label htmlFor="drawer-toggle" id="drawer-toggle-label"/>
            <header>Header</header>
            <nav id="drawer">
                <ul>
                    <li><a href="#">Menu Item</a></li>
                    <li><a href="#">Menu Item</a></li>
                    <li><a href="#">Menu Item</a></li>
                    <li><a href="#">Menu Item</a></li>
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