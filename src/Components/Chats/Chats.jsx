import React from "react";
import chats from "./Chats.module.css";
import ChatsCars from "./ChatsCars/ChatsCars";

const Chats = (props) => {
  // console.log(props);
  const full = props.cars.cars.map((cars) => (
    <ChatsCars
      name={cars.name}
      id={cars.id}
      price={cars.price}
      sale={cars.sale}
    />
  ));

  let textArea = React.createRef();

  let addCars = () => {
    let text = textArea.current.value;
    props.addCars(text);
    textArea.current.value = "";
  };

  return (
    <div className={chats.chats}>
      <h2 className={chats.title}>chats</h2>
      <div className={chats.textareaButton}>
        <textarea ref={textArea} className={chats.textarea}></textarea>
        <button onClick={addCars} className={chats.button}>
          click me
        </button>
      </div>
      <div className={chats.wrapper}>{full}</div>
    </div>
  );
};

export default Chats;
