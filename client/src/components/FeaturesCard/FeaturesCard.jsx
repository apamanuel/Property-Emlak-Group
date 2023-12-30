import React from "react";
import bed from "../../assets/bed.png";
import space from "../../assets/optimization.png";
import locationIcon from "../../assets/location.png";
import bathroom from "../../assets/bathroom.png";
import style from "../FeaturesCard/FeaturesCard.module.css";


const FeaturesCard = (props)=>{
    const { bedrooms, bathrooms, livingSpace, location} = props.features;

    return(
        <div className={style.container}>
            <div className={style.iconContainer}>
                <img src={locationIcon} alt='location' className={style.icon} />
                {location}                
            </div>
            <div className={style.iconContainer}>
                <img src={bed} alt='bed' className={style.icon} />
                {bedrooms}
            </div>
            <div className={style.iconContainer}>
                <img src={bathroom} alt='bathroom' className={style.icon} />
                {bathrooms}
            </div> 
            <div className={style.iconContainer}>
                <img src={space} alt='space' className={style.icon} />
                {livingSpace}
            </div>                  
        </div>
    );
};

export default FeaturesCard;