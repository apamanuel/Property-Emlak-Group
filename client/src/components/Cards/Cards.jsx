import React from "react";
import Card from "../shared/Card";
import { useSelector } from "react-redux";
import style from "../Cards/Cards.module.css";

const Cards = ()=>{
    const properties = useSelector(state=>state.properties)
    return(
        <div className={style.container}>
            {properties.map(item=>(
                <Card property={item} key={item.id} />
            ))}
        </div>
    );
};

export default Cards;