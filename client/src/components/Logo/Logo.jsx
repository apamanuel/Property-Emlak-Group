import React from "react";
import logo from "../../assets/Logo Property Global Emlak.jpg"
import style from "../Logo/Logo.module.css";

const Logo = ()=>{
    return(
        <div className={style.container}>
            <img src={logo} alt="logo" />
        </div>
    );
};

export default Logo;