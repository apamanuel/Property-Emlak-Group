import React from "react";
import Layout from "../../shared/Layout";
import Hero from "../../Hero/Hero";
import FeaturedProperties from "../../FeaturedProperties/FeaturedProperties";
import style from "../Home/Home.module.css";

const Home = ()=>{
    return (
        <div>
            <Layout>
                <div className={style.container}>
                    <Hero />
                    <FeaturedProperties />
                </div>
            </Layout>
        </div>
    );
};

export default Home;