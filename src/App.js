import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Products from "./Components/Products/Products";
import Chats from "./Components/Chats/Chats";
import Home from "./Components/Home/Home";
// import Sidebar from "./Components/Sidebar/Sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App(props) {
    // debugger
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                {/*<Sidebar/>*/}
                <div className={App.appWrapper}>
                    <Routes>
                        <Route path="/main" element={<Main/>}/>
                        <Route path="/home" element={<Home home={props.state}/>}/>
                        <Route path="/chats" element={<Chats/>}/>
                        <Route path="/products" element={<Products/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
