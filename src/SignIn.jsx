import React, { useState } from "react";
import Header from "./Header";
import "./index.css";
import "./Expense.css";
import "./SignIn.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth, updateUserDatabase} from "./firebase";
import { useNavigate, NavLink } from "react-router-dom"

const SignIn=()=>{

    const navigate = useNavigate();

    const[fullName,setFullName] = useState({
        fname : "",
        lname : "",
        email : "",
        password : "",
    });

    const inputEvent=(event)=>{
        // console.log(event.target.value);
        // console.log(event.target.name);

        const{name, value} = event.target;
        
        setFullName((preValue) =>{
            return{
                ...preValue,
                [name] : value,
            };
        });
        };

    const onSubmits=(event)=>{
        event.preventDefault();
        if(!fullName.fname || !fullName.lname || !fullName.email || !fullName.password){
            alert("Please enter all values!")
        }
        else{
            console.log(fullName);
            createUserWithEmailAndPassword(auth, fullName.email, fullName.password)
                .then(async(res)=>{
                    const user = res.user;
                    console.log(user);
                    await updateProfile(user, {
                        displayName: fullName.fname+" "+fullName.lname,
                    });

                    const userId = res.user.email;
                    await updateUserDatabase(
                        {name: fullName.fname+" "+fullName.lname},
                        userId
                    );

                    //alert("Profile created")
                    //console.log(res);

                    navigate("/Groups")
                })
                .catch((err)=> {
                    alert(err.message);
                    console.log("Err - ",err);
                });
        }
    };

    return(
        <>
        <Header/>
        <div className="fullPage">
        <div className = "bigBox">
        <div className="headS">
            <form onSubmit={onSubmits}>
            <div className="formBox">   
            <h1 className="heading"><b>Register Account</b></h1>
            <input 
            type="text" 
            placeholder=" First Name " 
            name="fname"
            onChange={inputEvent} 
            value={fullName.fname} 
            className="box"/>

            <input 
            type="text" 
            placeholder=" Last Name " 
            name="lname"
            onChange={inputEvent} 
            value={fullName.lname} 
            className="box"/>

            <input 
            type="email" 
            placeholder=" Email " 
            name="email"
            onChange={inputEvent} 
            value={fullName.email} 
            className="box"/>

            
            <input 
            type="password" 
            placeholder=" Password " 
            name="password"
            onChange={inputEvent} 
            value={fullName.password} 
            className="box"/>       
            <div className ="submitBox">
            <button type="submit" className="submitButton">Submit</button>
            </div>
            <div className="redirectToLogin">Already have an account <NavLink to="/LogIn" className = "navRedirectToLogin">Log In</NavLink></div>
            </div>
            </form>
        </div>
        <img src = "https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-2242.jpg?w=2000" className="img1" alt="image2"/>
        </div>
        </div>
        </>
    );
}

export default SignIn;

