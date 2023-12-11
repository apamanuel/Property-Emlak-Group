import React from "react";
import { Link } from "react-router-dom";
import style from "../NavBar/NavBar.module.css";

const NavBar = ()=>{
    return(
        <div className={style.container}>
            <ul className={style.list}>
                <li>
                    Home
                </li>
                <li>
                    For sale
                </li>
                <li>
                    Documentation
                </li>
                <li>
                    About us
                </li>
                <li>
                    Contact us
                </li>
                <li>
                    Login
                </li>
            </ul>
        </div>
    );
};

export default NavBar;