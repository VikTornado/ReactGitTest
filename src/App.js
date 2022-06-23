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
import TestPage from "./Components/TestPage/TestPage";
import {addAboutRef, addCars, addlistNew} from "./State";
// import {addlist} from "./State";
// import {addCars} from "./State";
// import {addName} from "./State";

function App(props) {
    // console.log(props);
    return (
        <div className="App">
            <Header/>
            {/*<Sidebar/>*/}
            <div className={App.appWrapper}>
                <Routes>
                    <Route path="/main" element={<Main/>}/>
                    <Route
                        path="/home"
                        element={<Home home={props.state} addlistNew={addlistNew}/>}
                    />
                    <Route path="/chats" element={<Chats cars={props.state} addCars={addCars}/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/about" element={<About addAbout={props.state} addAboutRef={addAboutRef}/>}/>
                    <Route
                        path="/products" element={<Products prod={props.state} addTextArea2={props.addTextArea2}/>}/>
                    <Route
                        path="/test" element={<TestPage test={props.state} addTextArea={props.addTextArea}/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
