import React from "react";
import { Link } from "react-router-dom";
import style from "../shared/Card.module.css";
import FeaturesCard from "../FeaturesCard/FeaturesCard";

const Card = (props)=>{
    const { id,title, description, features, price, image } = props.property;
    console.log(id);
    return(
        <div className={style.container}>
            <div className={style.imageContainer}>
                <img src={image} alt='property' className={style.image} />
            </div>
            <div className={style.title}>
                <Link to={`/${id}`} className={style.link}>
                    <h3>{title}</h3>
                </Link>                
            </div>
            <div className={style.description}>
                <p>{description}</p>
            </div>
            <div className={style.features}>
                <FeaturesCard features={features}/>
            </div>
            <div className={style.price}>
                <p>$ {price}</p>
            </div>
            <div className={style.btnContainer}>
                <button className={style.btn}>QUICK ENQUIRE</button>
            </div>
        </div>
    );
};

export default Card;