import React from "react";
import about from "./About.module.css";
import AboutTwo from "./AboutTwo/About";

const About = (props) => {
    console.log(props)
    let addAbout = props.addAbout.about.map(name => <AboutTwo name={name.name} aboutPost={props.aboutPost}/>)
    let addText = React.createRef();
    let addButton = () => {
        let newButton = addText.current.value;
        props.addAboutRef(newButton);
        addText.current.value = "";
    };
    let onPostChange = () => {

    }
    return (
        <div className={about.about}>
            <h2 className={about.title}>about</h2>
            <div className={about.textareaBlock}>
                <textarea onChange={onPostChange} ref={addText} className={about.textarea} value={props.aboutPost}/>
                <button onClick={addButton} className={about.button}>
                    about button
                </button>
                {addAbout}
            </div>
        </div>
    );
};

export default About;
