import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import Currency from "../Currency/Currency";
import Languages from "../Languages/Languages";
import ContactIcon from "../ContactIcon/ContactIcon";
import style from "../Header/Header.module.css";

const Header = ()=>{
    return(
        <div className={style.container}>
            <div className={style.logo}>
                <Logo />
            </div>
            <div className={style.navBar}>
                <NavBar />
            </div>
            <div className={style.currency}>
                <Currency />
            </div>
            <div className={style.languages}>
                <Languages />
            </div>
            <div className={style.btnContact}>
                <ContactIcon />
            </div>
        </div>
    );
};

export default Header;