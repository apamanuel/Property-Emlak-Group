import React from "react";
import { Link } from "react-router-dom";
import style from "../shared/Card.module.css";

const Card = (props)=>{
    const { id,title, description, features, price, image } = props.property;
    console.log(id);
    return(
        <div className={style.container}>
            <div className={style.imageContainer}>
                <img src={image} alt='property' className={style.image} />
            </div>
            <div className={style.title}>
                <Link to={`/${id}`}>
                    {title}
                </Link>                
            </div>
            <div className={style.description}>
                {description}
            </div>
            <div className={style.features}>
                Features
            </div>
            <div className={style.price}>
                $ {price}
            </div>
            <div className={style.btn}>
                <button>QUICK ENQUIRE</button>
            </div>
        </div>
    );
};

export default Card;