import React from 'react'
import Logo from "../../UI/logo"
import classes from "./style.module.css"

const Header = ({ style }) => {
    return (
        <nav className={classes.Nav} style={style}>
            <Logo  />
        </nav>
    )
}

export default Header
