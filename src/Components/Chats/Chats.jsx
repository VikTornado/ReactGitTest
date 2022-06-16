import React from "react";
import chats from "./Chats.module.css"

const Chats = () =>{
    return(
        <div className={chats.chats}>
            <h2 className={chats.title}>chats</h2>
        </div>
    )
}

export default Chats