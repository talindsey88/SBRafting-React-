import React from "react";
import {  useLocation } from 'react-router-dom';
import Footer from './Footer';


const FooterToggle = () => {
        console.log('location = ', useLocation());
        if (useLocation().pathname === '/'){
            return null;
        }
        return(
            <div>
               <Footer/>
            </div>
        );
}

export default FooterToggle;