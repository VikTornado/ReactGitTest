import React from "react";
import TestLink from "./TestLink/Test";
import test from "./Test.module.css"

const Test = (props) => {
    console.log(props)
    let addTest = props.name.about.map(name => <TestLink name={name.name}/>)
    let refTest = React.createRef()
    let testButton = () => {
        let text = refTest.current.value
        props.addAboutRef(text)
        refTest.current.value = ""
    }
    let onChange = () => {
        let text = refTest.current.value
        props.updateNewPostText(text)
    }
    return (
        <div>
            <h1>Test</h1>
            <div className={test.block}>
                <textarea onChange={onChange} ref={refTest} className={test.textarea} value={props.newPostText}/>
                <button onClick={testButton} className={test.button}>Test button</button>
            </div>
            {addTest}
        </div>
    )
}

export default Test