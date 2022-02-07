import React, { useState } from "react";
import ReactDOM from "react-dom";
import { v4 as uuidV4 } from "uuid";
import '../Footer';




export const BanniereFooter = () => {
   const listDeMenu4 = [
      {tag:"contact", title:"Contacter notre équipe commerciale"},
        
    ]
   return (
       <section className="banniere">
          <div>
             <h3 className="titre-banniere">Adoptez une nouvelle façon de travailler</h3>
             <div className="button-contacter-commercial-bis"> {Array.isArray(listDeMenu4) && listDeMenu4.map(item =>
                     
                     <a onClick={()=>props.handleClik(item)} key={uuidV4()}>{item.title}</a>
                     
                    )}
                    </div>
          </div>
       </section>
    )
     
    
  
  }