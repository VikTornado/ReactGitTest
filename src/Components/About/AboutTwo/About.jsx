import React from "react";
import about from "./About.module.css";

const AboutTwo = (props) => {
    // console.log(props)
    return (
        <div>
            <div> {props.name}</div>
            <div> {props.year}</div>
        </div>
    );
};

export default AboutTwo;
