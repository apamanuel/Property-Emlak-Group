import React from "react";
import style from "../Hero/Hero.module.css";

const Hero = ()=>{
    return (
        <section className={style.container}>
            <div className={style.heroBody}>
                <h1 className={style.title}>
                    Investment Potential in Turkey
                </h1>
                <button className={style.btn}>
                    ENTER
                </button>
            </div>
        </section>
    );
};

export default Hero;