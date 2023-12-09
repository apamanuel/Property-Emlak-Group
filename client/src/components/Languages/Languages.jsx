import React from "react";
import style from "../Languages/Languages.module.css";

const Languages = ()=>{
    return (
        <div className={style.container}>
            <ul className={style.listLanguages}>
                <li className={style.listItem}>
                    EN
                </li>
                <li className={style.listItem}>
                    RU
                </li>
                <li className={style.listItem}>
                    AR
                </li>
                <li className={style.listItem}>
                    DE
                </li>
                <li className={style.listItem}>
                    中文
                </li>
                <li className={style.listItem}>
                    FA
                </li>
            </ul>
        </div>
    );
};

export default Languages;