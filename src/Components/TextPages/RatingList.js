import React from "react";

import classes from "./RatingList.module.css"

const RatingList = props => {
    return <ul className={classes.Rating}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>
}

export default RatingList;