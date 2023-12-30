import React from "react";
import Layout from "../../shared/Layout";
import Card from "../../shared/Card";
import { useSelector } from "react-redux";

const ForSale = ()=>{
    const properties = useSelector(state=>state.properties);
    const property = properties[0];
    return (
        <div>
            <Layout>
                <Card property={property} key={property.id}/>
            </Layout>            
        </div>
    );
};

export default ForSale;