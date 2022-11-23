import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./index.css";
import "./AddGroups.css";
import { useNavigate } from "react-router-dom";
import {db, auth} from "./firebase"
import { doc, setDoc, getDoc} from "firebase/firestore"; 

let members = [];
let group = null;
let currUser = null;

const AddGroups = () =>{

    const navigate = useNavigate();

    const [user, setUser] = useState("");
    
    useEffect(() =>{
        auth.onAuthStateChanged(res=>{
            if(res){
                setUser(res);
                currUser = res;
            }else{
                setUser("");
            }
            console.log(res);
        })
    },[]);

    const[fullName,setFullName] = useState({
        gname : "",
        description : "",
        mmail : "",
    });


    const inputEvent=(event)=>{
        //console.log(event.target.value);
        //console.log(event.target.name);

        const{name, value} = event.target;
        
        setFullName((preValue) =>{

            //console.log(preValue);
            return{
                ...preValue,
                [name] : value,
            };
        });
    };

    

    const findMember = async(event)=>{
        event.preventDefault();
        console.log(fullName.mmail);

        const mails = await getDoc(doc(db,"users",fullName.mmail));

        if(mails.exists()){
            console.log("found it", mails.data());

            if(members.includes(fullName.mmail)){
                alert("Already added");
            }
            else if(user.email===fullName.mmail){
                alert("You cannot add yourself");
            }
            else{
                members.push(fullName.mmail);
                let list = document.getElementById("mem");
                let li = document.createElement("li");
                li.innerText = mails.get("name")+"  :  "+fullName.mmail;
                list.appendChild(li);
            }

            console.log(members);
        }
        else{
            alert("User does not exist")
            console.log("does not exist");
        }
    }

    const onSubmits=async(event)=>{
        event.preventDefault();
        //console.log(user);

        if(!fullName.gname || !fullName.description){
            alert("Please enter all values!");
        }
        else{
            group = fullName.gname;
            const ref = doc(db, "users", user.email, "groups", fullName.gname);

            // const grp = await getDoc(ref);
            // if(grp.exists()){
            //     console.log(grp.data().groups.count());
            // }
            await setDoc(ref, {
                description: fullName.description,
                members: members
            });
        
            members.forEach(async(a)=>{
                const temp = [];
                const ref = doc(db, "users", a, "groups", fullName.gname);

                members.forEach((b)=>{
                    if(a===b){
                        temp.push(user.email);
                    }
                    else{
                        temp.push(b);
                    }
                })

                await setDoc(ref, {
                    description: fullName.description,
                    members: temp
                });

            })
            members=[];
            navigate("/Groups/AddGroups/Expense");
            //alert("form Submitted");
        }
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
                        type="email" 
                        placeholder=" e-mail " 
                        name="mmail"
                        onChange={inputEvent} 
                        value={fullName.mmail} 
                        className="box"/>
                        </div>
                        <button type="submit" className="addBtn5" onClick={findMember}>Add Member</button>
                        <h3 className="heading5">Members List</h3>
                        <ol id="mem"></ol>
            </div>
        </div>
        <div className="addBtn">
            <button type="submit" className="addBtn1" onClick={onSubmits}>Add Group</button>
        </div>
        </div>
        </>
    );
}
export default AddGroups;
export {group, currUser};