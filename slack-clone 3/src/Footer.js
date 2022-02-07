import React from "react";
import ReactDOM from "react-dom";
import './Footer.css';
import {FooterNavBar, BanniereFooter } from './component';





export const Footer = () => {
  
  return (
    <div>
      <div>
       <BanniereFooter/>
      </div>
      <div>
      <FooterNavBar/>
      </div> 
    </div>
    
    
  )
   
  

}