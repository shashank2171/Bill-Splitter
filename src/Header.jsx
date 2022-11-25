import React, {useEffect} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";
import { signOut } from "firebase/auth";
import { auth } from "./firebase"



const Header= () =>{

    const navigate = useNavigate();

    useEffect(() =>{
        if(auth.currentUser!=null){
            document.getElementById("home").style.visibility="hidden";
            document.getElementById("signin").style.visibility="hidden";
            document.getElementById("groups").style.visibility="visible";
            document.getElementById("signout").style.visibility="visible";
        }
        else{
            document.getElementById("home").style.visibility="visible";
            document.getElementById("signin").style.visibility="visible";
            document.getElementById("groups").style.visibility="hidden";
            document.getElementById("signout").style.visibility="hidden";
        }
    },[]);

    const onSubmits=(event)=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
            }).catch((error) => {
            // An error happened.
        });
    }

    


    return(
        <>
        <div className="navBox">
            <h1 className="heading1">Bill.Splitter</h1>
        <ul className="ulList">
            <li className="ulliList" id="home"><NavLink to="/" className = "navList">Home</NavLink></li>
            <li className="ulliList" id="groups"><NavLink to="/Groups" className = "navList">Groups</NavLink></li>
            <li className="ulliList" id="signin"><NavLink to="/SignIn" className = "navList">SignUp</NavLink></li>
            <li className="ulliList" id="signout" onClick={onSubmits}>SignOut</li>
            {/* <li className="ulliList"><NavLink to="/LogIn" className = "navList">LogIn</NavLink></li> */}
        </ul>
        </div>
       </>
    )
}
export default Header;