import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../Hero/Hero.module.css";

const Hero = ()=>{
    const navigate = useNavigate();
    const handlerBtn = ()=>{
        navigate('/forSale');
    };
    return (
        <section className={style.container}>
            <div className={style.heroBody}>
                <h1 className={style.title}>
                    Investment Potential in Turkey
                </h1>
                <button className={style.btn} onClick={handlerBtn}>
                    ENTER
                </button>
            </div>
        </section>
    );
};

export default Hero;