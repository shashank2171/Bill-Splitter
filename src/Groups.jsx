import React from "react";
import Header from "./Header";
import "./index.css";
import "./groups.css";
import { NavLink } from "react-router-dom";

const Groups = () =>{
    
    return(
        <>
        <Header/>
        <div className="fullGroups">
        <div className="head1">Groups</div>
        <div className = "outerBox1">
        <div className="innerBox1">
        <div className="img">add group icon</div>
        <button className="btn"><NavLink to="/Groups/AddGroups">Add Group</NavLink></button>
        </div></div>
        <div className="lowerBox"></div>
        </div>
        </>
    );
}
export default Groups;