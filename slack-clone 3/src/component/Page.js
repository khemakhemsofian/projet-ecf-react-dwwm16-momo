import React, { Fragment } from "react";
import ReactDOM from "react-dom";
//import { v4 as uuidV4 } from "uuid";
import {Entreprise, Contact} from "./";


export const Page  = (props) => {
  
     const pages = {
         entreprise:  <Entreprise {...props}/>,
         contact:     <Contact {...props}/>,
         page404:  <button>page404</button>,
    }
    console.log("azerty",props.pageName2)
    return(
       
        <>
        {pages[props.pageName2] || pages.page404}
        </>
    
     )
}