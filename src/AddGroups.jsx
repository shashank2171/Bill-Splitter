import React, { useState } from "react";
import Header from "./Header";
import "./index.css";
import "./AddGroups.css";
import { NavLink } from "react-router-dom";

const AddGroups = () =>{

    const[fullName,setFullName] = useState({
        gname : " ",
        description : " ",
        mname : " ",
        mmail : " ",
    });


    const inputEvent=(event)=>{
        console.log(event.target.value);
        console.log(event.target.name);

        const{name, value} = event.target;
        
        setFullName((preValue) =>{

            console.log(preValue);
            return{
                ...preValue,
                [name] : value,
            };
        });
        };

    const onSubmits=(event)=>{
        event.preventDefault();
        alert("form Submitted");
    };
    return(
        <>
        <Header/>
        <div className="fullBox">
        <h1 className="head1">Add Groups</h1>
        <div className="outerBox2">
            <div className="box1">
                <div className="head">
                    <form onSubmit={onSubmits}>
                        <div className="formBox">   
                        <h3 className="heading">Group Name</h3>
                        <input 
                        type="text" 
                        placeholder="Group Name " 
                        name="gname"
                        onChange={inputEvent} 
                        value={fullName.gname} 
                        className="box"/>

                        <h3 className="heading">Description</h3>
                        <input 
                        type="text" 
                        placeholder=" Description" 
                        name="description"
                        onChange={inputEvent} 
                        value={fullName.description} 
                        className="boxDscp"/>

                        </div>
                    </form>
                </div>
            </div>
            <div className="box2">
            <div className="head">
                        <h3 className="heading">Add Member</h3>
                        <input 
                        type="text" 
                        placeholder=" Name " 
                        name="mname"
                        onChange={inputEvent} 
                        value={fullName.mname} 
                        className="box"/>

                        <input 
                        type="email" 
                        placeholder=" e-mail " 
                        name="mmail"
                        onChange={inputEvent} 
                        value={fullName.mmail} 
                        className="box"/>
                        </div>
                        <h3 className="heading5">Members List</h3>
            </div>
        </div>
        <div className="addBtn">
        <button className="addBtn1"><NavLink to="/Groups/AddGroups/Expense">Add Group</NavLink></button>
        </div>
        </div>
        </>
    );
}
export default AddGroups;