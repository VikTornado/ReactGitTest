import React from "react";
import main from "./Main.module.css";

const Main = (props) => {
    let addRef = React.createRef();
    let addClick = () => {
        let addPost = addRef.current.value;
        alert(addPost);
        addRef.current.value = "";
    };
    return (
        <div className={main.main}>
            <h2 className={main.title}>Main</h2>
            <div className={main.textareaBlock}>
                <textarea ref={addRef}></textarea>
                <button onClick={addClick}>click</button>
            </div>
        </div>
    );
};

export default Main;
