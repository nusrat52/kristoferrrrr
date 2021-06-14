import React from 'react'
import classes from "./styleSt.module.css"

function Assignment({name, description}) {
    return (
        <div className={classes.assignment}>
            <div className={classes.assignment__pic}></div>

            <h1 className={classes.assignment__basliq}>{name}</h1>
            <p className={classes.assignment__text}>{description}</p>
        </div>
    )
}

export default Assignment
