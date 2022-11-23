import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const Header= () =>{
    return(
        <>
        <div className="navBox">
            <h1 className="heading1">Bill.Splitter</h1>
        <ul className="ulList">
            <li className="ulliList"><NavLink to="/" className = "navList">Home</NavLink></li>
            <li className="ulliList"><NavLink to="/Groups" className = "navList">Groups</NavLink></li>
            <li className="ulliList"><NavLink to="/SignIn" className = "navList">SignUp</NavLink></li>
            {/* <li className="ulliList"><NavLink to="/LogIn" className = "navList">LogIn</NavLink></li> */}
        </ul>
        </div>
       </>
    )
}
export default Header;