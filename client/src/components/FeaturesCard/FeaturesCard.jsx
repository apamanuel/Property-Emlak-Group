import React from "react";
import bed from "../../assets/bed.png";
import space from "../../assets/optimization.png";
import location from "../../assets/location.png";
import bathroom from "../../assets/bathroom.png";
import style from "../FeaturesCard/FeaturesCard.module.css";


const FeaturesCard = ()=>{
    const features = {
        propertyType: 'apartmen',
        bedrooms: 3,
        bathrooms: 2,
        livingSpace: '200m2',
        location: 'Istanbul',
    };
    return(
        <div className={style.container}>
            <div className={style.iconContainer}>
                <img src={location} alt='location' className={style.icon} />
                {features.location}                
            </div>
            <div className={style.iconContainer}>
                <img src={bed} alt='bed' className={style.icon} />
                {features.bedrooms}
            </div>
            <div className={style.iconContainer}>
                <img src={bathroom} alt='bathroom' className={style.icon} />
                {features.bathrooms}
            </div> 
            <div className={style.iconContainer}>
                <img src={space} alt='space' className={style.icon} />
                {features.livingSpace}
            </div>                  
        </div>
    );
};

export default FeaturesCard;