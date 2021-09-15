import React from "react";
import {  useLocation } from 'react-router-dom';
import Header from './Header';


const HeaderToggle = (props) => {
        console.log('location = ', useLocation());
        if (useLocation().pathname === '/'){
            return null;
        }
        return(
               <Header formAction={props.formAction}/>
        );
}

export default HeaderToggle;