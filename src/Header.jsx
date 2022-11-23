import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";


const Header= () =>{

    

    return(
        <>
        <div className="navBox">
            <h1 className="heading1">Bill.Splitter</h1>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Groups">Groups</NavLink></li>
            <li><NavLink to="/SignIn">SignUp</NavLink></li>
            <li><NavLink to="/LogIn">LogIn</NavLink></li>
        </ul>
        </div>
       </>
    )
}


export default Header;