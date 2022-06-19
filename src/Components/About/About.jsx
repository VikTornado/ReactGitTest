import React from "react";
import about from "./About.module.css";

const About = (props) => {
  let addText = React.createRef();
  let addButton = () => {
    let newButton = addText.current.value;
    addText.current.value = "";
    alert(newButton);
  };
  return (
    <div className={about.about}>
      <h2 className={about.title}>about</h2>
      <div className={about.textareaBlock}>
        <textarea ref={addText} className={about.textarea}></textarea>
        <button onClick={addButton} className={about.button}>
          about button
        </button>
      </div>
    </div>
  );
};

export default About;
