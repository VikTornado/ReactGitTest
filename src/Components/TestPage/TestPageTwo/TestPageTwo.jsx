import React from "react";
import testTwo from "./TestPageTwo.module.css"

const TestPageTwo = (props) => {
    // console.log(props)
  return(
      <div className={testTwo.testBlock}>
        <ul className={testTwo.list}>
            <li className={testTwo.item}>{props.test}</li>
        </ul>
      </div>
  )
}
export default TestPageTwo
