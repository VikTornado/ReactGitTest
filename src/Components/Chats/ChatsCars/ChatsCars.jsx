import React from "react";
import chatsCars from "./ChatsCars.module.css"

const ChatsCars = () =>{
const cars=[
        {name: "Bmw", id:"1", sale: "sale", price: 121},
        {name: "Bmw1", id:"2", sale: "sale", price: 122},
        {name: "Bmw2", id:"3", sale: "sale", price: 123},
        {name: "Bmw3", id:"4", sale: "sale", price: 124},
        {name: "Bmw4", id:"5", sale: "sale", price: 125},
        {name: "Bmw5", id:"6", sale: "sale", price: 126},
    ]

const fullName = cars[0].name
    return(
        <div>
        <div className={chatsCars.block}>
            <h5>{fullName}</h5>
            <span>sale</span>
            <img src="https://zigfrid.com.ua/assets/img/slider/h2-slider-02.png" alt="img" />
            <span>price</span>
        </div>
        <div className={chatsCars.block}>
            <h5>{fullName}</h5>
            <span>sale</span>
            <img src="https://zigfrid.com.ua/assets/img/slider/h2-slider-02.png" alt="img" />
            <span>price</span>
        </div>
        </div>
    )
}

export default ChatsCars