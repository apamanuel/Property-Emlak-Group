import React from "react";
import { Link } from "react-router-dom";
import style from "../NavBar/NavBar.module.css";

const NavBar = ()=>{
    return(
        <div className={style.container}>
            <ul className={style.list}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to="/forSale">For sale</Link>
                </li>
                <li>
                    <Link to="/documents">Documentation</Link>
                </li>
                <li>
                    <Link to="/aboutUs">About us</Link>
                </li>
                <li>
                    <Link to="/contactUs">Contact us</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;