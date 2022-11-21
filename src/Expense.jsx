import React , { useState } from "react";
import Header from "./Header";
import "./index.css";
import "./Expense.css";
import { NavLink } from "react-router-dom";

const Expense = () =>{

    
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
        <div className="fullPage3">
        <h1 className="head1">Group Name</h1>
        <div className="outerBox3">
            <div className="boxE1">
            
            <div className="head">
                    <form onSubmit={onSubmits}>
                        <div className="formBox">   
                        <h3 className="heading">Amount</h3>
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
                <button className="addBtn2"><NavLink to="/Groups/AddGroups/Expense/AddExpense">Add Expense</NavLink></button>
                <h3 className="heading6">Expenses List</h3>
            </div>
            <div className="boxE2">
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
        </div>
        </>
    );
}
export default Expense;