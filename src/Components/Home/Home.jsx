import React from "react";
import home from "./Home.module.css";
import HomePage from "./HomePage/HomePage";

const Home = (props) => {
  const linkDataNew = props.home.listTo.map((user) => (
    <HomePage id={user.id} name={user.name} />));
  let addNewRef = React.createRef();
  let addPost = () => {
    let addRef = addNewRef.current.value;
    props.addlistNew(addRef);
  };

  let addRefSec = React.createRef();
  let addSec = () => {
    // debugger;
    let addReffSec = addRefSec.current.value;
    alert(addReffSec);
    addRefSec.current.value = ""
  };
  return (
    <div className={home.home}>
      <div className={home.block}>
        <div className={home.left}>
          <textarea ref={addNewRef} className={home.textarea}></textarea>
          <button onClick={addPost} className={home.button}>
            button
          </button>
        </div>
        <div className={home.right}>
          <textarea ref={addRefSec} className={home.textarea}></textarea>
          <button onClick={addSec} className={home.button}>
            second
          </button>
        </div>
      </div>

      {linkDataNew}
    </div>
  );
};

export default Home;
