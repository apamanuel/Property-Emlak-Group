import React from "react";
import icon from "../../assets/contact-icon.png";
import style from "../ContactIcon/ContactIcon.module.css";

const ContactIcon = ()=>{
    return(
        <div className={style.container}>
            <img src={icon} alt="contact" className={style.image}/>
        </div>
    );
};

export default ContactIcon;