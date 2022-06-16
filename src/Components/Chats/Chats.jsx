import React from "react";
import chats from "./Chats.module.css"
import ChatsCars from "./ChatsCars/ChatsCars";

const Chats = () =>{
    return(
        <div className={chats.chats}>
            <h2 className={chats.title}>chats</h2>
            <div className={chats.wrapper}>
            <ChatsCars/>
            </div>
        </div>
    )
}

export default Chats