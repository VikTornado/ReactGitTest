import React from "react";
import header from "./Header.module.css"
import HeaderNavbar from "./HeaderNavbar/HeaderNavbar";

const Header = (props) =>{
    return(
        <div className={header.header}>
            <div className={header.logo}>Logo</div>
            <div className={header.navbar}>
                <HeaderNavbar/>
            </div>
        </div>
    )
}

export default Header