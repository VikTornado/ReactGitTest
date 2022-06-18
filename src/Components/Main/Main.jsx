import React from "react";
import main from "./Main.module.css";

const Main = (props) => {
  let addRef = React.createRef();
  let addClick = () => {
    let addPost = addRef.current.value;
    alert(addPost);
  };
  return (
    <div className={main.main}>
      <h2 className={main.title}>Main</h2>
      <textarea ref={addRef} name="" id="" cols="30" rows="10"></textarea>
      <button onClick={addClick}>click</button>
    </div>
  );
};

export default Main;
