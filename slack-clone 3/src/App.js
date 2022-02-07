import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Header } from "./Header";
import { Contenu } from "./Contenu";
import { Footer } from "./Footer";
import './App.css';

export const App = () => {
   const [pageName, setPageName ] = useState("entreprise");
    function handleClik(item){
      setPageName(item.tag);
      console.log(item.tag);
    }
    return (
        <div>
            <Header handleClik={handleClik}/>
            <div>
                <Contenu pageName2 ={pageName}/>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )

}