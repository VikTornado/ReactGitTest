import React from "react";
import Probnaya from "./Probnaya/Probnaya";


const Prob = (props) => {
    console.log(props)
    let names = props.prob.prob.map(name => <Probnaya name={name.name}/>)
    let textareaRef = React.createRef()
    let button = () => {
        let text = textareaRef.current.value
        props.probData(text)
        // textareaRef.current.value = ""
    }
    return(
        <div>
            <textarea ref={textareaRef}></textarea>
            <button onClick={button}>button</button>
            <ul>
                {names}
            </ul>
        </div>
    )
}

export default Prob