import React from "react";
import Header from "./Header";

import "./index.css";
import "./AddExpense.css";
import { currUser, group } from "./AddGroups";
import { currExpense } from "./Expense";
import { doc, getDoc} from "firebase/firestore"; 
import {db} from "./firebase"



const AddExpense = () =>{

    // const[fullName,setFullName] = useState({
    //     gname : "",
    //     description : "",
    //     mname : "",
    //     mmail : "",
    // });


    // const inputEvent=(event)=>{
    //     console.log(event.target.value);
    //     console.log(event.target.name);

    //     const{name, value} = event.target;
        
    //     setFullName((preValue) =>{

    //         console.log(preValue);
    //         return{
    //             ...preValue,
    //             [name] : value,
    //         };
    //     });
    //     };

    

    async function fire(){
        const ref = doc(db, "users", currUser.email, "groups", group);
        const expenses = await getDoc(ref);

        const am = await getDoc(doc(db, "users", currUser.email, "groups", group, "expenses", currExpense));
        const amount = am.get("amount");
        let members = expenses.get("members");
        console.log(amount);
        let final = (amount/(amount.length+1)).toFixed(2);
        let list = document.getElementById("mem");
        let li = document.createElement("li");
        li.innerText = "You owe :  ₹ "+final;
        
        list.appendChild(li);

        members.forEach(async element => {
            const m = doc(db, "users", element);
            const me = await getDoc(m);

            let list = document.getElementById("mem");
            let li = document.createElement("li");
            li.innerText = me.get("name")+" : ₹ "+final;
            list.appendChild(li);
            console.log(element);
        });
    }

    fire();

    const onSubmits=(event)=>{
        let list = document.getElementById("mem").innerHTML="";
        list = document.getElementById("mem");
        let li = document.createElement("h1");
        li.innerText = "All Bills Settled";
        list.appendChild(li);
    }
    
    return(
        <>

        <Header/>
        <div className="fullBills">
        <h1 className="head5">Active Bills</h1>
        <div className="outerBox4">
            {/* <div className="box4">
                <h2 className="heading3">Settled Bills</h2> </div>     */}
            <div className="box5">
            {/* <h2 className="heading3">Active Bills</h2>  */}
            <ol id = "mem"></ol>
            <button className="addBtn3" onClick={onSubmits}>Settle</button>
        {/* <button className="addBtn3"><NavLink to="/Groups/AddGroups/Expense">Settle</NavLink></button> */}
        </div>
        </div>
        </div>
        </>
    );
}

export default AddExpense;