import React from "react";
import test from "./TestPage.module.css";

const TestPage = (props) => {
  let addAreaLink = React.createRef();
  let addTestPage = () => {
    let addNewText = addAreaLink.current.value;
    alert(addNewText);
  };

  return (
    <div className={test.test}>
      <h2 className={test.title}>TestPage</h2>
      <textarea ref={addAreaLink} cols="30" rows="10"></textarea>
      <button onClick={addTestPage}>Button</button>
    </div>
  );
};

export default TestPage;
