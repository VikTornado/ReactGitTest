import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Products from "./Components/Products/Products";
import Profile from "./Components/Profile/Profile";
import Chats from "./Components/Chats/Chats";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import {Route, Routes} from "react-router-dom";
import {addAboutRef, addCars, addlistNew, probData} from "./State";
import Test from "./Components/Test/Test";
import Prob from "./Components/Prob/Prob";


function App(props) {
    return (
        <div className="App">
            <Header/>
            <div className={App.appWrapper}>
                <Routes>
                    <Route path="/main" element={<Main/>}/>
                    <Route
                        path="/home"
                        element={<Home home={props.state} addlistNew={addlistNew}/>}/>
                    <Route path="/chats" element={<Chats cars={props.state} addCars={addCars}/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/about" element={<About addAbout={props.state}
                                                         addAboutRef={addAboutRef}
                                                         aboutPost={props.aboutPost}/>}/>
                    <Route
                        path="/products" element={<Products prod={props.state}
                                                            addTextArea2={props.addTextArea2}
                                                            probData={probData}/>}/>
                    <Route path="/test" element={<Test name={props.state}
                                                       addAboutRef={addAboutRef}
                                                       newPostText={props.newPostText}
                                                       updateNewPostText={props.updateNewPostText}
                    />}/>
                    //-----------------------------------------//

                    <Route path="/prob" element={<Prob prob={props.state} probData={probData}/>}/>
                    //-----------------------------------------//

                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
