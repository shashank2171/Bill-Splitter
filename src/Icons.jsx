import React from "react";
import { RiExchangeDollarLine } from "react-icons/ri";
import "./index.css";
import "./Icons.css";

const Icons = () =>{
return(
    <>
    <div className="fullBox2">
    <ul className="ulIcons">
        <li className = "list0"><RiExchangeDollarLine className="iconsReact"/><h4>Make it better</h4></li>
        <li  className = "list0"><RiExchangeDollarLine className="iconsReact"/><h4>Do it faster</h4></li>
        <li  className = "list0"><RiExchangeDollarLine className="iconsReact"/><h4>Working harder</h4></li>
    </ul>
    </div>
    </>
)
}

export default Icons;