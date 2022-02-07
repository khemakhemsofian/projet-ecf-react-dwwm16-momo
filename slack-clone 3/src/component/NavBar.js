import React, { useState } from "react";
import ReactDOM from "react-dom";
import { v4 as uuidV4 } from "uuid";
import '../Header';




export const NavBar  = (props) => {

  
  const [isOk, setIsOk ]= useState(false);

 
  const listDeMenu = [
    {
      title: "Produit",
      items: [
        {title: "Fonctionalité"},
        {title: "Canaux"},
        {title:"QG numérique"},
        {title:"Intégrations"},
        {title:"Sécurité"},
        {title:"Slack Connect"},
        {title:"Solutions"},
        {title:"Témoignages"},
         {title:"Télécharger Slack"}
      ]
    },
   
  
  ];
  const listeDeMenu2 =[
  {tag:"entreprise", title:"Pour les entreprises",items:[]},
  {tag:"resource", title:"Ressources",items:[]},
  {tag:"tarif", title:"Tarifs",items:[]}
  ]
  const listDeMenu3 = [
      {title:"Connexion"},
      
  ]

   const listDeMenu4 = [
    {tag:"contact", title:"Contacter notre équipe commerciale"},
      
  ]
  const listDeMenu5 = [
    {title:"Essai Gratuit"}
      
  ]
  


  return (
     <header role="banner">
       <nav className="navBar" role="navigation">
         <div className="nav-row">
           <div className="c-slacklogo"><a data-clog-click="" data-clog-ui-element="link_home" data-clog-ui-component="inc_header_nav_deux" className="c-slacklogo--white" href="https://slack.com/intl/fr-fr/" aria-label="Slack" data-qa="logo">
           {/*<svg height="25" width="100" className="c-slacklogo--white" viewBox="0 0 240 60" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
           <title>Slack</title>
           <g fill="none">
           <path d="m75.663 47.477 2.929-6.846c3.207 2.375 7.39 3.632 11.574 3.632 3.068 0 5.02-1.187 5.02-3.003-.07-5.03-18.477-1.118-18.617-13.764-.07-6.427 5.648-11.387 13.737-11.387 4.81 0 9.622 1.188 13.038 3.913l-2.737 6.992c-3.143-2.021-7.025-3.43-10.72-3.43-2.51 0-4.184 1.187-4.184 2.725.07 4.96 18.618 2.235 18.827 14.322 0 6.567-5.579 11.178-13.528 11.178-5.856 0-11.225-1.397-15.34-4.332m116.629-9.325a8.498 8.498 0 0 1 -7.405 4.33c-4.698 0-8.506-3.816-8.506-8.523s3.808-8.523 8.506-8.523a8.498 8.498 0 0 1 7.405 4.33l8.143-4.52c-3.05-5.451-8.868-9.137-15.548-9.137-9.839 0-17.815 7.991-17.815 17.85 0 9.858 7.976 17.85 17.815 17.85 6.68 0 12.498-3.686 15.548-9.137zm-82.477 12.958h10.18v-49.86h-10.179zm95.761-49.86v49.86h10.18v-14.938l12.063 14.938h13.012l-15.34-17.746 14.224-16.559h-12.454l-11.505 13.767v-29.322zm-54.218 15.557v4.053c-1.673-2.795-5.787-4.751-10.11-4.751-8.925 0-15.967 7.895-15.967 17.815s7.042 17.885 15.967 17.885c4.323 0 8.437-1.956 10.11-4.751v4.052h10.18v-34.303zm0 21.414c-1.464 2.445-4.532 4.26-7.948 4.26-4.699 0-8.507-3.815-8.507-8.522s3.808-8.523 8.507-8.523c3.416 0 6.484 1.886 7.948 4.4z" fill="#ffffff"></path>
           <path d="m21.902.148c-3.299 0-5.973 2.68-5.973 5.985a5.979 5.979 0 0 0 5.973 5.985h5.974v-5.985a5.98 5.98 0 0 0 -5.974-5.985m0 15.96h-15.929c-3.299 0-5.973 2.68-5.973 5.986 0 3.305 2.674 5.985 5.973 5.985h15.93c3.298 0 5.973-2.68 5.973-5.985 0-3.306-2.675-5.986-5.974-5.986" fill="#36c5f0"></path>
           <path d="m59.734 22.094c0-3.306-2.675-5.986-5.974-5.986s-5.973 2.68-5.973 5.986v5.985h5.973a5.98 5.98 0 0 0 5.974-5.985m-15.929 0v-15.961a5.98 5.98 0 0 0 -5.974-5.985c-3.299 0-5.973 2.68-5.973 5.985v15.96c0 3.307 2.674 5.987 5.973 5.987a5.98 5.98 0 0 0 5.974-5.985" fill="#2eb67d"></path>
           <path d="m37.831 60a5.98 5.98 0 0 0 5.974-5.985 5.98 5.98 0 0 0 -5.974-5.985h-5.973v5.985c0 3.305 2.674 5.985 5.973 5.985m0-15.96h15.93c3.298 0 5.973-2.68 5.973-5.986a5.98 5.98 0 0 0 -5.974-5.985h-15.929c-3.299 0-5.973 2.68-5.973 5.985a5.979 5.979 0 0 0 5.973 5.985" fill="#ecb22e"></path>
           <path d="m0 38.054a5.979 5.979 0 0 0 5.973 5.985 5.98 5.98 0 0 0 5.974-5.985v-5.985h-5.974c-3.299 0-5.973 2.68-5.973 5.985m15.929 0v15.96c0 3.306 2.674 5.986 5.973 5.986a5.98 5.98 0 0 0 5.974-5.985v-15.961a5.979 5.979 0 0 0 -5.974-5.985c-3.299 0-5.973 2.68-5.973 5.985" fill="#e01e5a"></path>
           </g>
           </svg>*/}
           <svg width="100" className="c-slacklogo--color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60" shapeRendering="geometricPrecision">
             <title>Slack</title>
             <path d="m75.663 47.477 2.929-6.846c3.207 2.375 7.39 3.632 11.574 3.632 3.068 0 5.02-1.187 5.02-3.003-.07-5.03-18.477-1.118-18.617-13.764-.07-6.427 5.648-11.387 13.737-11.387 4.81 0 9.622 1.188 13.038 3.913l-2.737 6.992c-3.143-2.021-7.025-3.43-10.72-3.43-2.51 0-4.184 1.187-4.184 2.725.07 4.96 18.618 2.235 18.827 14.322 0 6.567-5.579 11.178-13.528 11.178-5.856 0-11.225-1.397-15.34-4.332m116.629-9.325a8.498 8.498 0 0 1 -7.405 4.33c-4.698 0-8.506-3.816-8.506-8.523s3.808-8.523 8.506-8.523a8.498 8.498 0 0 1 7.405 4.33l8.143-4.52c-3.05-5.451-8.868-9.137-15.548-9.137-9.839 0-17.815 7.991-17.815 17.85 0 9.858 7.976 17.85 17.815 17.85 6.68 0 12.498-3.686 15.548-9.137zm-82.477 12.958h10.18v-49.86h-10.179zm95.761-49.86v49.86h10.18v-14.938l12.063 14.938h13.012l-15.34-17.746 14.224-16.559h-12.454l-11.505 13.767v-29.322zm-54.218 15.557v4.053c-1.673-2.795-5.787-4.751-10.11-4.751-8.925 0-15.967 7.895-15.967 17.815s7.042 17.885 15.967 17.885c4.323 0 8.437-1.956 10.11-4.751v4.052h10.18v-34.303zm0 21.414c-1.464 2.445-4.532 4.26-7.948 4.26-4.699 0-8.507-3.815-8.507-8.522s3.808-8.523 8.507-8.523c3.416 0 6.484 1.886 7.948 4.4z"></path>
             <path d="m21.902.148c-3.299 0-5.973 2.68-5.973 5.985a5.979 5.979 0 0 0 5.973 5.985h5.974v-5.985a5.98 5.98 0 0 0 -5.974-5.985m0 15.96h-15.929c-3.299 0-5.973 2.68-5.973 5.986 0 3.305 2.674 5.985 5.973 5.985h15.93c3.298 0 5.973-2.68 5.973-5.985 0-3.306-2.675-5.986-5.974-5.986" fill="#36C5F0"></path>
             <path d="m59.734 22.094c0-3.306-2.675-5.986-5.974-5.986s-5.973 2.68-5.973 5.986v5.985h5.973a5.98 5.98 0 0 0 5.974-5.985m-15.929 0v-15.961a5.98 5.98 0 0 0 -5.974-5.985c-3.299 0-5.973 2.68-5.973 5.985v15.96c0 3.307 2.674 5.987 5.973 5.987a5.98 5.98 0 0 0 5.974-5.985" fill="#2EB67D"></path>
             <path d="m37.831 60a5.98 5.98 0 0 0 5.974-5.985 5.98 5.98 0 0 0 -5.974-5.985h-5.973v5.985c0 3.305 2.674 5.985 5.973 5.985m0-15.96h15.93c3.298 0 5.973-2.68 5.973-5.986a5.98 5.98 0 0 0 -5.974-5.985h-15.929c-3.299 0-5.973 2.68-5.973 5.985a5.979 5.979 0 0 0 5.973 5.985" fill="#ECB22E"></path>
             <g><path d="m0 38.054a5.979 5.979 0 0 0 5.973 5.985 5.98 5.98 0 0 0 5.974-5.985v-5.985h-5.974c-3.299 0-5.973 2.68-5.973 5.985m15.929 0v15.96c0 3.306 2.674 5.986 5.973 5.986a5.98 5.98 0 0 0 5.974-5.985v-15.961a5.979 5.979 0 0 0 -5.974-5.985c-3.299 0-5.973 2.68-5.973 5.985" fill="#E01E5A"></path>
           </g>
           </svg>
           </a>
           </div>
             <nav className="liste-de-la-nav">
              <ul className="liste__nav">
              <span className="menu-deroulant" onMouseOver={()=>setIsOk(!isOk)}  onMouseLeave={()=>setIsOk(!isOk)} onBlur={()=>setIsOk(!isOk)}>Produit</span>
              {Array.isArray(listDeMenu) && listDeMenu.map( obj  => 
               
               ( <div className="sous-menu-deroulant" key={uuidV4()}> 
              
                <div>
                {isOk && <ul className="decoration-sous-menu">
                    {obj.items.map(item =>
                       
                     <li key={uuidV4()}>{item.title}</li>
                     )}
                   </ul>}
                </div>
      
               </div>
                  )
             )}
               
                     <div className="liste-de-la-nav2"> {Array.isArray(listeDeMenu2) && listeDeMenu2.map(item =>
                     
                     <li onClick={()=>props.handleClik(item)} key={uuidV4()}>{item.title}</li>
              
                    )}</div>
                      <div className="connexion-contact"> {Array.isArray(listDeMenu3) && listDeMenu3.map(item =>
                     
                     <a key={uuidV4()}>{item.title}</a>
                     
                    )}
                    </div>
                    <div className="button-contacter-commercial"> {Array.isArray(listDeMenu4) && listDeMenu4.map(item =>
                     
                     <a onClick={()=>props.handleClik(item)} key={uuidV4()}>{item.title}</a>
                     
                    )}
                    </div>
                    <div className="button-essai"> {Array.isArray(listDeMenu5) && listDeMenu5.map(item =>
                     
                     <a key={uuidV4()}>{item.title}</a>
                     
                    )}
                    </div>
              </ul>
             </nav> 
         </div>
       </nav>
     </header>
  )
   
  

}
