import React from "react";
import { Link } from "react-router-dom";
import style from "../NavBar/NavBar.module.css";

const NavBar = ()=>{
    return(
        <div className={style.container}>
            <ul className={style.list}>
                <li>
                    <Link to='/' className={style.navigation}>Home</Link>
                </li>
                <li>
                    <Link to="/forSale" className={style.navigation}>For sale</Link>
                </li>
                <li>
                    <Link to="/documents" className={style.navigation}>Documentation</Link>
                </li>
                <li>
                    <Link to="/aboutUs" className={style.navigation}>About us</Link>
                </li>
                <li>
                    <Link to="/contactUs" className={style.navigation}>Contact us</Link>
                </li>
                <li>
                    <Link to="/login" className={style.navigation}>Login</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;