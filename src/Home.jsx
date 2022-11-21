import React from "react";
import { SiApostrophe } from "react-icons/si";
import Header from "./Header";
import "./Home.css";
const Home = () =>{
    return(
        <>
    <Header/>
   
    <h2 className="heading2">Bill Splitter helps you split your expenses with your buddies</h2>
    <div className="buttonHead">
    <a href=" "><button className="button">Get Started <SiApostrophe/></button></a>
    </div>
    <div className="content">
        <div className = "imageBox">
    <img src = "https://img.freepik.com/free-vector/hand-drawn-group-people-background-composition_23-2149196877.jpg?w=2000" alt ="image" className="image1"/>
    </div>
    <div className="para">
    The frequent issues users have with sharing among themselves gave rise to the idea for creating this application. Maintaining personal spending is a huge concern, and dividing expenses across the group might be perplexing. Before, there were several ways to keep track of expenses, including the use of sticky notes by regular people, spreadsheets for professionals, and ledgers for keeping track of large sums. There are still issues with data consistency, the possibility of missing important inputs, and the potential for human mistake. Data recorders are not always readily available, and getting a comprehensive picture of those charges might be time-consuming.
    </div>
    </div>
    <div className="threeBox">
    <div className="icon">
    <SiApostrophe/>
    </div>
    <div className="three">
        <h2 className="head3">Make groups for simple management</h2>
        <div className="threeOne">
        dshdcbh bceihbce cbeicbei cbewicb cebwicuewb dcbeiucbeiw cbewuic cndjvb fcebjfceb  fbejfcbejlf fcejfcebwjef febsjfcje febjfcej febjcf
        <button className="button2">Get Started</button>
        </div>
    </div>
    </div>
    <div className="four">
    <h2 className="head4">Register your friends</h2>
        <div className="fourOne">
        <img src="https://i.pinimg.com/564x/e8/bf/6f/e8bf6fa78954a7e4e4579675d257ed7e.jpg" alt="img" className="image3"/>
        <div className="fourTwo">
        <p>dshdcbh bceihbce cbeicbei cbewicb cebwicuewb dcbeiucbeiw cbewuic cndjvb fcebjfceb  fbejfcbejlf fcejfcebwjef febsjfcje febjfcej febjcf</p>
          <button className="button3">Register</button>
        </div>
        </div>
    </div>
 </>
    
    );
}
export default Home;
