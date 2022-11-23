import React , { useState } from "react";
import Header from "./Header";
import "./index.css";
import "./Expense.css";

import { doc, setDoc, getDoc } from "firebase/firestore"; 
import {db} from "./firebase"
import {group, currUser} from "./AddGroups"
import { useNavigate } from "react-router-dom";


let currExpense = null;

const Expense = () =>{

    const navigate = useNavigate();
    const[fullName,setFullName] = useState({
        amount : "",
        description : "",
    });


    const inputEvent=(event)=>{
       
        const{name, value} = event.target;
        
        setFullName((preValue) =>{

            //console.log(preValue);
            return{
                ...preValue,
                [name] : value,
            };
        });
    };

    const onSubmits=async(event)=>{
        event.preventDefault();

        if(!fullName.amount || !fullName.description){
            alert("Please enter all values!");
        }
        else{
            let exp = doc(db,"users", currUser.email, "groups", group, "expenses", fullName.description);
            await setDoc(exp, {
                amount: fullName.amount
            });

            exp = doc(db,"users", currUser.email, "groups", group);
            const mem = await getDoc(exp);

            //console.log(mem.get("members"));

            mem.get("members").forEach(async element => {
                exp = doc(db,"users", element, "groups", group, "expenses", fullName.description);
                await setDoc(exp, {
                    amount: fullName.amount
                });
                currExpense = fullName.description;
            });

            
            // console.log(fullName);
            // console.log(group);
            navigate("/Groups/AddGroups/Expense/AddExpense");
        }
    };

    return(
        <>
        <Header/>
        <div className="fullPage3">
        <h1 className="head1">{group}</h1>
        <div className="outerBox3">
            <div className="boxE1">
            
            <div className="head">
                    <form onSubmit={onSubmits}>
                        <div className="formBox">   
                        <h3 className="heading">Amount</h3>
                        <input 
                        type="number" 
                        placeholder="  Enter Amount " 
                        name="amount"
                        onChange={inputEvent} 
                        value={fullName.amount} 
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
                <button className="addBtn2" onClick={onSubmits}>Add Expense</button>
                <h3 className="heading6">Expenses List</h3>
            </div>
            {/* <div className="boxE2">
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
            </div> */}
        </div>
        </div>
        </>
    );
}
export default Expense;
export {currExpense};