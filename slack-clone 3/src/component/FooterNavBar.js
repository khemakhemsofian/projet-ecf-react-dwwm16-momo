import React, { useState } from "react";
/*import ReactDOM from "react-dom";*/
import { v4 as uuidV4 } from "uuid";
import * as icon from "react-icons/fa";


import '../Footer';

export const FooterNavBar = () => {
    const isOk = useState();

    const listDeMenuFooter = [
        {
            title: "POURQUOI CHOISIR SLACK ?",
            items: [
                { title: "Comparatif Slack vs. E-mail" },
                { title: "Canaux" },
                { title: "Investissement personnel" },
                { title: "Évolutivité" },
                { title: "Regarder la démonstration" }
            ]
        },
    ];
    const listDeMenuFooter2 = [
        {
            title: "PRODUIT",
            items: [
                { title: "Fonctionnalités" },
                { title: "Intégrations" },
                { title: "Pour les entreprises" },
                { title: "Solutions" }
            ]
        },
    ];
    const listDeMenuFooter3 = [
        {
            title: "TARIFS",
            items: [
                { title: "Forfaits" },
                { title: "Payant vs. Gratuit" }
            ]
        },
    ];
    const listDeMenuFooter4 = [
        {
            title: "RESSOURCES",
            items: [
                { title: "Partenaires" },
                { title: "Développeurs" },
                { title: "Communauté" },
                { title: "Applications" },
                { title: "Blog" },
                { title: "Centre d’assistance" },
                { title: "Événements" }
            ]
        },
    ]; const listDeMenuFooter5 = [
        {
            title: "À PROPOS DE SLACK",
            items: [
                { title: "À propos de nous" },
                { title: "Nos dirigeants" },
                { title: "Relations avec les investisseurs" },
                { title: "Actualités" },
                { title: "Dossier de presse" },
                { title: "Emplois" }
            ]
        },
    ];
    const finDePage1 = [
        {
            items: [
                { title: "Statut" },
                { title: "Confidentialité" },
                { title: "Conditions" },
                { title: "Préférences de cookies" },
                { title: "Nous contacter" },
                { title: "Changer de région" },

            ]
        },
    ];

    const finDePage2 = [
        {
            items: [
                { title: "Télécharger Slack " },
            ]
        },
    ];


    const finDePage3 = [
        { icon: <icon.FaTwitterSquare/> },
        { icon: <icon.FaFacebookSquare/> },
        { icon: <icon.FaYoutubeSquare/> },
        { icon: <icon.FaLinkedin/> },
    ];


    return (

        <footer className="footer-nav">
            <div className="footer-menu">
                <div className="content-footer">
                    <a data-clog-click="" data-clog-ui-component="inc_footer_nav" data-clog-ui-element="link_home" href="https://slack.com/intl/fr-fr/" aria-label="Slack">
                        <svg width="54" height="54" className="c-nav--footer__svgicon_c-slackhash" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none">
                                <path d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386" fill="#36C5F0"></path>
                                <path d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387" fill="#2EB67D"></path>
                                <path d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386" fill="#ECB22E"></path>
                                <path d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.25m14.336-.001v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.25a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387" fill="#E01E5A"></path>
                            </g>
                        </svg>
                    </a>
                    <nav className="footer-contenu">
                        <ul className="row-footer">

                            {Array.isArray(listDeMenuFooter) && listDeMenuFooter.map(obj =>

                            (<div className="les-sous-menus" key={uuidV4()}>

                                <div>
                                    {isOk && <ul className="decoration-des-menus">
                                        <span className="titre-des-menus">POURQUOI CHOISIR SLACK ?</span>
                                        {obj.items.map(item =>

                                            <li><a key={uuidV4()}>{item.title}</a></li>
                                        )}
                                    </ul>}
                                </div>

                            </div>
                            )
                            )}

                            {Array.isArray(listDeMenuFooter2) && listDeMenuFooter2.map(obj =>

                            (<div className="les-sous-menus" key={uuidV4()}>

                                <div>
                                    {isOk && <ul className="decoration-des-menus">
                                        <span className="titre-des-menus">PRODUIT</span>
                                        {obj.items.map(item =>

                                            <li><a key={uuidV4()}>{item.title}</a></li>
                                        )}
                                    </ul>}
                                </div>

                            </div>
                            )
                            )}


                            {Array.isArray(listDeMenuFooter3) && listDeMenuFooter3.map(obj =>

                            (<div className="les-sous-menus" key={uuidV4()}>

                                <div className="bloc-sous-menu">
                                    {isOk && <ul className="decoration-des-menus">
                                        <span className="titre-des-menus">TARIFS</span>
                                        {obj.items.map(item =>

                                            <li><a key={uuidV4()}>{item.title}</a></li>
                                        )}
                                    </ul>}
                                </div>

                            </div>
                            )
                            )}


                            {Array.isArray(listDeMenuFooter4) && listDeMenuFooter4.map(obj =>

                            (<div className="les-sous-menus" key={uuidV4()}>

                                <div className="bloc-sous-menu">
                                    {isOk && <ul className="decoration-des-menus">
                                        <span className="titre-des-menus">RESSOURCES</span>
                                        {obj.items.map(item =>

                                            <li><a key={uuidV4()}>{item.title}</a></li>
                                        )}
                                    </ul>}
                                </div>

                            </div>
                            )
                            )}


                            {Array.isArray(listDeMenuFooter5) && listDeMenuFooter5.map(obj =>

                            (<div className="les-sous-menus" key={uuidV4()}>

                                <div className="bloc-sous-menu">
                                    {isOk && <ul className="decoration-des-menus">
                                        <span className="titre-des-menus">À PROPOS DE SLACK</span>
                                        {obj.items.map(item =>

                                            <li><a key={uuidV4()}>{item.title}</a></li>
                                        )}
                                    </ul>}
                                </div>

                            </div>
                            )
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="bloc-du-bas_1">
                {Array.isArray(finDePage1) && finDePage1.map(obj =>
                (<div className="bloc-1" key={uuidV4()}>

                    {isOk && <ul className="liste-bloc-1">
                        {obj.items.map(item =>
                            <li>
                                <a key={uuidV4()}>{item.title}</a>
                            </li>
                        )}

                    </ul>}
                </div>
                )
                )}
                {Array.isArray(finDePage2) && finDePage2.map(obj =>
                (<div className="bloc-2" key={uuidV4()}>

                    <ul className="liste-bloc-2">
                        {obj.items.map(item =>
                            <li>
                                <a key={uuidV4()}>{item.title}</a>
                            </li>
                        )}

                    </ul>
                </div>
                )
                )}

               
                <div className="bloc-3" key={uuidV4()}>

                        {finDePage3.map(item =>
                           
                               item.icon
                  
                        )}

                </div>
                
                
            </div>
            <div class="c-la-fin-ouais"><span className="decoration-fin">©2022 Slack Technologies, LLC, une entreprise Salesforce. Tous droits réservés. Les différentes marques commerciales appartiennent à leurs propriétaires respectifs.</span></div>
        </footer>

    )
}