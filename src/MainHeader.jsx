import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import "./index.css";

const MainHeader = () =>{
    return(
        <>
        <Header/>
        <Outlet/>
        </>
    );
}
export default MainHeader;