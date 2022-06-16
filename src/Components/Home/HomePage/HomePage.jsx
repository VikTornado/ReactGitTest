import React from "react";
import home from "./HomePage.module.css"
import {NavLink} from "react-router-dom";

const HomePage = (props) => {
    console.log(props)
    return (
        <div className={home.listWrapper}>
            <ul className={home.list}>
                <NavLink to={"/" + props.id} className={home.item}>{props.name}</NavLink>
            </ul>
        </div>
    )
}

export default HomePage