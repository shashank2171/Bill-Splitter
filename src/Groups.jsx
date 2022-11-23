import React,{ useEffect, useState } from "react";
import Header from "./Header";
import "./index.css";
import "./groups.css";
import { NavLink } from "react-router-dom";
import {auth} from "./firebase"

const Groups = () =>{

    const [userName, setUserName] = useState("");
    

    useEffect(() =>{
        auth.onAuthStateChanged(user=>{
            if(user){
                setUserName(user.displayName);
            }else{
                setUserName("");
            }
            console.log(user);
        })
    },[])

    return(
        <>
        <Header/>
        <div className="fullGroups">
        <div className="head1">Welcome {userName}</div>
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