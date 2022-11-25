import React,{ useEffect, useState } from "react";
import Header from "./Header";
import "./index.css";
import "./groups.css";
import { NavLink } from "react-router-dom";
import {db, auth} from "./firebase"
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, doc, getDocs, getDoc } from "firebase/firestore";

let currUser = null
const Groups = () =>{



    const [userName, setUserName] = useState("");
    

    useEffect(() =>{
        auth.onAuthStateChanged(async user=>{
            if(user){
                setUserName(user.displayName);

                currUser = user;
                Grp();
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
                <div className="img"><AiFillPlusCircle className = "addGroupIcon"/></div>
                <button className="btn"><NavLink to="/Groups/AddGroups" className="navList1">Add Group</NavLink></button>
                </div>
            </div>
            <h2 className="head1">My Groups</h2>
            <div className="lowerBox" id="low" >
                
            </div>
        </div>
        </>
    );
}

async function Grp(){


    let box = document.getElementById("low");

    const q = await getDocs(collection(db,"users",currUser.email, "groups"));
    
    q.forEach((d)=>{
        let ibox = document.createElement("span");
        ibox.innerText="";
        ibox.style.margin="30px";
        ibox.style.border="5px solid black"
        ibox.style.padding="30px";
        ibox.style.paddingTop="10px"
        ibox.style.borderRadius="10px";
        let h = document.createElement("h2");

        ibox.appendChild(h);
        h.innerHTML=d.id;

        let h6 = document.createElement("h6");
        h6.innerHTML=":"+d.data().description;
        h.appendChild(h6);

        let ol = document.createElement("ol");
        //console.log(doc.data());
        
        d.data().members.forEach(async(ele)=>{

            var m = await getDoc(doc(db,"users",ele));
            console.log(m.data().name);
            let li = document.createElement("li");
            li.innerHTML=m.data().name;
            ol.appendChild(li);

        })
        h6.appendChild(ol);
        box.appendChild(ibox);
        
        box.style.borderBlockColor="black"
    })
}

export default Groups;