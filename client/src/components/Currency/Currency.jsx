import React from "react";
import style from "../Currency/Currency.module.css";

const Currency = ()=>{
    return(
        <div className={style.container}>
            <ul className={style.listCurrency}>
                <li>
                    USD
                </li>
                <li>
                    EURO
                </li>
                <li>
                    GBP                    
                </li>
                <li>
                    TRY
                </li>
            </ul>
        </div>
    );
};

export default Currency;