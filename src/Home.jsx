import React from "react";
import { NavLink } from "react-router-dom";
// import { FiZap } from "react-icons/fi";
import Header from "./Header";
import Icons from "./Icons";
import "./Home.css";
const Home = () =>{
    return(
        <>
    <Header/>
    <h2 className="heading2">Bill Splitter helps you split your expenses with your buddies</h2>
    <div className="buttonHead">
    <a href=" "><button className="button"><NavLink to="/Groups" className = "navList">Get Started</NavLink></button></a>
    </div>
    <div className="content">
        <div className = "imageBox">
    <img src = "https://img.freepik.com/free-vector/hand-drawn-group-people-background-composition_23-2149196877.jpg?w=2000" alt ="" className="image1"/>
    </div>
    <div className="para">Split billing is the division of a bill for service into two or more parts. Bills may be split to divide work between clients, payers or for reimbursement to different service providers for performing a shared service.
    </div>
    </div>
    <div className="threeBox">
    <div className="icon"></div>
    <div className="three">
        <h2 className="head3">Make groups for simple management</h2>
        <div className="threeOne">
        The frequent issues users have with sharing among themselves gave rise to the idea for creating this application. Maintaining personal spending is a huge concern, and dividing expenses across the group might be perplexing. Before, there were several ways to keep track of expenses, including the use of sticky notes by regular people, spreadsheets for professionals, and ledgers for keeping track of large sums. There are still issues with data consistency, the possibility of missing important inputs, and the potential for human mistake. Data recorders are not always readily available, and getting a comprehensive picture of those charges might be time-consuming.
        <button className="button2"><NavLink to="/Groups" className = "navList6">Get Started</NavLink></button>
        </div>
    </div>
    <div className="newBox"><Icons/></div>
    </div>
    <div className="four">
        <div className="fourOne">
        <img src="https://i.pinimg.com/564x/e8/bf/6f/e8bf6fa78954a7e4e4579675d257ed7e.jpg" alt="img" className="image3"/>
        <div className="fourTwo">
        <h2 className="head4">Register your friends</h2>
        <p>There is no need to recall the costs.Bill Splitter can record your expenses, share them with your friends, and keep track of your bills.Would you like to split your expenditures with some friends? No problem, establish groups, and distribute it quickly.</p>
        <button className="button3"><NavLink to="/Groups/AddGroups" className = "navList">Get Started</NavLink></button>
        </div>
        </div>
    </div>
 </>
    
    );
}
export default Home;
