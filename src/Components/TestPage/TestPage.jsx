import React from "react";
import test from "./TestPage.module.css"
import TestPageTwo from "./TestPageTwo/TestPageTwo";

const TestPage = (props) => {
    let addTest = props.test.test.map(test => <TestPageTwo test={test.name}/>)
    let textArea = React.createRef()
    let addClick = () => {
        let text = textArea.current.value
        props.addTextArea(text)
    }
    return(
        <div>
            <h1>TestPage</h1>
            <div className={test.textareaBlock}>
                <textarea ref={textArea} className={test.textarea}></textarea>
                <button onClick={addClick} className={test.button}>button</button>
            </div>
            {addTest}
        </div>
    )
}
export default TestPage