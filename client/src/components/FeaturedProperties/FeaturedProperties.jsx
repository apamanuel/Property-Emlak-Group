import React from "react";
import Card from "../shared/Card";
import style from "../FeaturedProperties/FeaturedProperties.module.css"
import { useSelector } from "react-redux";

const FeaturedProperties = ()=>{
    const properties = useSelector(state=>state.featured);
    const featured = properties.map(item=>(
        <Card property={item} key={item.id} />
    ));

    return (
        <div className={style.container}>
            <h2 className={style.title}>Featured Properties</h2>
            <div className={style.properties}>
                {featured}
            </div>
        </div>
    );
};

export default FeaturedProperties;