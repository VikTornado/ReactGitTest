import React from "react";
import home from "./Home.module.css"
import HomePage from "./HomePage/HomePage";

const Home = (props) => {
    console.log(props)
    const linkDataNew = props.home.listTo.map(user => <HomePage id={user.id} name={user.name}/>)
    return (
        <div className={home.home}>
            {linkDataNew}
        </div>
    )
}

export default Home