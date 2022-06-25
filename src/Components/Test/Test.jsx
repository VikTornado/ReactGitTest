import React from "react";
import TestLink from "./TestLink/Test";
import test from "./Test.module.css"

const Test = (props) => {
    console.log(props)
    let addTest = props.name.about.map(name => <TestLink name={name.name}/>)
    let refTest = React.createRef()
    let testButton = () => {
        let text = refTest.current.value
        alert(text)
        refTest.current.value = ""
    }
    return (
        <div>
            <h1>Test</h1>
            <div className={test.block}>
                <textarea ref={refTest} className={test.textarea}></textarea>
                <button onClick={testButton} className={test.button}>Test button</button>
            </div>
            {addTest}
        </div>
    )
}

export default Test