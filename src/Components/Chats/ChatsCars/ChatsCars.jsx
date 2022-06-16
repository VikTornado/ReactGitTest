import React from "react";
import chatsCars from "./ChatsCars.module.css"

const ChatsCars = (props) =>{
    console.log(props);
    return(
        <div>
        <div className={chatsCars.block}>
            <h5 className={chatsCars.title}>{props.name}</h5>
            <span className={chatsCars.sale}>{props.sale}</span>
            <div className={chatsCars.img}>
                <img className={chatsCars.img} src="https://zigfrid.com.ua/assets/img/slider/h2-slider-02.png" alt="img" />
            </div>
            <span className={chatsCars.price}>{props.price}</span>
            <span className={chatsCars.id}>{props.id}</span>
        </div>
        </div>
    )
}

export default ChatsCars