import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Products from "./Components/Products/Products";
import Profile from "./Components/Profile/Profile";
import Chats from "./Components/Chats/Chats";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
// import Sidebar from "./Components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";

function App(props) {
  // console.log(props);
  return (
    <div className="App">
      <Header />
      {/*<Sidebar/>*/}
      <div className={App.appWrapper}>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/home" element={<Home home={props.state} />} />
          <Route path="/chats" element={<Chats cars={props.state} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
