import React from "react";
import instagramIcon from "../../assets/instagram-icon.png";
import facebookIcon from "../../assets/facebook-icon.png";
import linkedinIcon from "../../assets/linkedin-icon.png";
import style from "../Footer/Footer.module.css";

const Footer = ()=>{
    return(
        <div className={style.container}>
            <div className={style.rrss}>
                <img src={instagramIcon} alt="instagram" className={style.image} />
                <img src={facebookIcon} alt="facebook" className={style.image} />
                <img src={linkedinIcon} alt="linkedin" className={style.image} />
            </div>
            <div className={style.copyright}>
                2023 © Property Global Emlak
            </div>
        </div>
    );
};

export default Footer;