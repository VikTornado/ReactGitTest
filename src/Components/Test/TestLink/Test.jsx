import React from "react";
import test from "./Test.module.css"
import {NavLink} from "react-router-dom";

const TestLink =(props)=>{
    console.log(props)
    return(
        <div>
            <ul className={test.link}>
                <NavLink to={"/"} className={test.item}>{props.name}</NavLink>
            </ul>
        </div>
    )
}

export default TestLink