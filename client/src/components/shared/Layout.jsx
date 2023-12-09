import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from "../shared/Layout.module.css";

const Layout = ({ children })=>{
    return( 
        <div className={style.container}>
            <Header />
            <main className={style.mainContainer}>
                { children }
            </main>
            <Footer />
        </div>
    );
};

export default Layout;