import React from "react";
import { v4 as uuidV4 } from "uuid";
import '../Contenu';





export const Entreprise = (props) => {
  const contenuText1 = [
    {
      title1: "POUR LES ENTREPRISES",
      title2: "Conçu avec les entreprises, pour les entreprises",
      text: "Slack est sécurisé. Modulable. C’est un logiciel que les personnes aiment utiliser, qui est disponible pour aider votre entreprise.",
      title3: "Découvrez comment Slack soutient les entreprises de toutes tailles :",
      listDeLien: [
        { lien: "ÉVOLUTIVITÉ", href: "#" },
        { lien: "INVESTISSEMENT PERSONNEL", href: "#" },
        { lien: "SLACK CONNECT", href: "#" },
        { lien: "SÉCURITÉ", href: "#" },
        { lien: "PLATEFORME", href: "#" },
      ],

      button: "Contacter-nous",
      src: "https://a.slack-edge.com/379ae/marketing/img/enterprise/new/hero/enterprise-hero.fr-FR.jpg",
    },

  ]

  const contenuText2 = [
    {
      title1: "ÉVOLUTIVITÉ",
      title2: "Créé pour répondre aux besoins des entreprises internationales",
      text1: "Soyez tranquille grâce à un temps de fonctionnement optimal de 99,99 %. ",
      text2:" Personnalisez Slack pour votre entreprise grâce à un nombre illimité de d’espaces de travail et de canaux. ",
      text3:" Gérez tous vos utilisateurs et équipes de manière centralisée.",
      listDeLien: [
        { lien: "En savoir plus sur Slack à l’échelle de votre entreprise", href: "#" },
      ],
      text2: ["« Slack nous a permis de décloisonner. Nous avons adopté Slack comme système de collaboration dans 194 pays et 171 bureaux différents, et l’esprit d’équipe n’a jamais été aussi fort. »"],
      src: "https://a.slack-edge.com/379ae/marketing/img/enterprise/new/sections/1-scale/scale.fr-FR.jpg",
    },

  ]

  const contenuText3 = [
    {
      title1: "SÉCURITÉ",
      title2: "Haut niveau de protection des données",
      text1:"Répondez aux exigences de conformité et aux exigences réglementaires comme la FINRA, la HIPAA et la FedRAMP ", 
      text2:" Soyez rassuré(e), Slack utilise les meilleures pratiques et dispositifs reconnus par l’industrie ", 
      text3:"Sécurisez vos données grâce à des fonctionnalités innovantes comme la gestion des clés de chiffrement Slack Enterprise (Slack EKM)",
      listDeLien: [
        { lien: "En savoir plus sur la sécurité", href: "#" },
      ],
      text2: ["« En renforçant notre sécurité avec la gestion des clés de chiffrement Slack Entreprise, nous avons immédiatement compris la valeur ajoutée de cette fonctionnalité qui nous offrait un contrôle total de nos données et la garantie que nous étions protégés en cas de menace de sécurité au sein de notre chaîne d’approvisionnement. »"],
      auteur3: "Colin Black, Opérateur en chef",
      src: "https://a.slack-edge.com/379ae/marketing/img/enterprise/new/sections/2-security/security.fr-FR.jpg",
    },

  ]

  const contenuText4 = [
    {
      title1: "INVESTISSEMENT PERSONNEL",
      title2: "L’engagement est un meilleur indicateur que le nombre d’installations",
      text1:"Travaillez de la façon qui vous convient le mieux grâce à une expérience utilisateur simple et intuitive ",
      text2:"Automatisez les tâches quotidiennes grâce à des flux de travail personnalisés, sans avoir besoin de les coder", 
      text3:"Suivez vos projets où que vous soyez, sur mobile ou sur votre ordinateur",
      listDeLien: [
        { lien: "Découvrir comment Slack génère de l’engagement", href: "#" },
      ],
      text2: ["24% Réduction du temps nécessaire pour que les nouveaux salariés atteignent leur pleine productivité¹  30% moins d’e-mails²"],
      auteur3: "¹Source : « La valeur commerciale de Slack »",
      auteur4: "²Source : ComputerWorld, « TD Ameritrade cuts email use by 30% after Slack rollout », 2019",
      src: "https://a.slack-edge.com/379ae/marketing/img/enterprise/new/sections/3-engagement/engagement.fr-FR.jpg",
    },

  ]
  const contenuText5 = [
    {
      title1: "PLATEFORME",
      title2: "Des applis qui dopent la productivité et s’adaptent à votre utilisation",
      text1:"Assurez-vous de la conformité des applis tierces",
      text2:"Standardisez les autorisations d’applis dans votre entreprise",
      text3:"Choisissez parmi plus de 2 400 applications",
      
      listDeLien: [
        { lien: "En savoir plus sur les applications et les intégrations", href: "#" },
      ],
      srcListe1:"https://a.slack-edge.com/0cf0c/marketing/img/enterprise/new/icons/zoom.png", 
      srcListe2:"https://a.slack-edge.com/0cf0c/marketing/img/enterprise/new/icons/outlook.png",
      srcListe3:"https://a.slack-edge.com/0cf0c/marketing/img/enterprise/new/icons/google-drive.png", 
      srcListe4:"https://a.slack-edge.com/0cf0c/marketing/img/enterprise/new/icons/salesforce.png" ,
      srcListe5:"https://a.slack-edge.com/4b8d0/marketing/img/enterprise/new/icons/service-now.png",
      srcListe6:"https://a.slack-edge.com/0cf0c/marketing/img/enterprise/new/icons/onedrive.png",
      srcListe7:"https://a.slack-edge.com/4b8d0/marketing/img/enterprise/new/icons/gmail.png",
      srcListe8:"https://a.slack-edge.com/379ae/marketing/img/enterprise/new/icons/dropbox.png",
      src: "https://a.slack-edge.com/379ae/marketing/img/enterprise/new/sections/4-platform/platform.fr-FR.jpg",
    },
  ]
  const contenuText6 = [
    {
      title1: "PLATEFORME",
      title2: "Travaillez avec des partenaires externes en toute sécurité",
      text1: "Conservez vos pratiques de sécurité des données tout en collaborant avec des partenaires de confiance",
      text2:"Connectez-vous à vos collaborateurs, clients et partenaires de manière centralisée",
      text3:"Réduisez les changements d’environnement de travail, augmentez la transparence et la productivité",
      
      listDeLien: [
        { lien: "Découvrez le fonctionnement de Slack Connect", href: "#" },
      ],
      text:"« Pour nous, il est essentiel que toutes les informations concernant un partenaire soient immédiatement à portée de main. Nous disposons d’une ligne directe avec nos homologues au sein des entreprises avec lesquelles nous collaborons le plus souvent. »",
      marqueSource1:"Zendesk",
      marqueSource2:"Mike Yakovlev, directeur des alliances technologiques",
      src: "https://a.slack-edge.com/379ae/marketing/img/enterprise/new/sections/5-connect/slack-connect.fr-FR.jpg",
    },
  ]
  

  return (

    <>

      {contenuText1.map(item =>
        <section className="section-partie">

          <div>
            <div className="mini-titre"> {

              <span key={uuidV4()}>{item.title1}</span>
            }
            </div>
            <span className="gros-titre"> {

              <h1 key={uuidV4()}>{item.title2}</h1>
            }
            </span>
            <span className="le-text"> {

              <p key={uuidV4()}>{item.text}</p>
            }
            </span>
            <div className="last-titre"> {
              <div>
                <strong key={uuidV4()}>{item.title3}</strong>
              </div>
            }
            </div>
            <ul className="mini-lien"> {item.listDeLien.map(item =>


              <li><a key={uuidV4()}>{item.lien}</a></li>

            )}

            </ul>
            <div className="button-contact"> {

              <a key={uuidV4()}>{item.button}</a>

            }
            </div>
          </div>
          <div className="img-src">
            <img src={item.src} alt="" />
          </div>

        </section>


      )}

      {contenuText2.map(item =>
        <section className="section-partie">

          <div>
            <div className="mini-titre2"> {

              <span key={uuidV4()}>{item.title1}</span>
            }
            </div>
            <span className="gros-titre2"> {

              <h1 key={uuidV4()}>{item.title2}</h1>
            }
            </span>
            <div className="le-text5"> {
              <ul>
                  <li key={uuidV4()}>{item.text1}</li>
                  <li key={uuidV4()}>{item.text2}</li>
                  <li key={uuidV4()}>{item.text3}</li>
              </ul>
            }
            </div>
            <ul className="mini-lien2"> {item.listDeLien.map(item =>


              <a key={uuidV4()}>{item.lien}</a>

            )}

            </ul>
            <div className="le-text-bis2"> {

              <a key={uuidV4()}>{item.text2}</a>

            }
            </div>
          </div>
          <div className="img-src">
            <img src={item.src} alt="" />
          </div>
        </section>

      )}

      {contenuText3.map(item =>
        <section className="section-partie">

          <div>
            <div className="mini-titre3"> {

              <span key={uuidV4()}>{item.title1}</span>
            }
            </div>
            <span className="gros-titre3"> {

              <h1 key={uuidV4()}>{item.title2}</h1>
            }
            </span>
            <div className="le-text3"> {
              <ul>
                  <li key={uuidV4()}>{item.text1}</li>
                  <li key={uuidV4()}>{item.text2}</li>
                  <li key={uuidV4()}>{item.text3}</li>
              </ul>
            
            }
            </div>
            <ul className="mini-lien3"> {item.listDeLien.map(item =>


              <a key={uuidV4()}>{item.lien}</a>

            )}

            </ul>
            <div className="le-text-bis3"> {

              <a key={uuidV4()}>{item.text2}</a>

            }
            </div>
            <div className="auteur3"> {

              <a key={uuidV4()}>{item.auteur3}</a>

            }
            </div>
          </div>
          <div className="img-src">
            <img src={item.src} alt="" />
          </div>
        </section>

      )}
      {contenuText4.map(item =>
        <section className="section-partie">

          <div>
            <div className="mini-titre4"> {

              <span key={uuidV4()}>{item.title1}</span>
            }
            </div>
            <span className="gros-titre4"> {

              <h1 key={uuidV4()}>{item.title2}</h1>
            }
            </span>
            <div className="le-text4"> {
              <ul>
                  <li key={uuidV4()}>{item.text1}</li>
                  <li key={uuidV4()}>{item.text2}</li>
                  <li key={uuidV4()}>{item.text3}</li>
              </ul>
            
            }
            </div>
            <ul className="mini-lien4"> {item.listDeLien.map(item =>


              <a key={uuidV4()}>{item.lien}</a>

            )}

            </ul>
            <div className="le-text-bis4"> {

              <a key={uuidV4()}>{item.text2}</a>

            }
            </div>
            <div className="auteur4"> {
              <a key={uuidV4()}>{item.auteur3}</a>
            }
            </div>
            <a className="auteur-bis4" key={uuidV4()}>{item.auteur4}</a>
          </div>
          <div className="img-src">
            <img src={item.src} alt="" />
          </div>
        </section>

      )}
      {contenuText5.map(item =>
        <section className="section-partie">

          <div>
            <div className="mini-titre5"> {

              <span key={uuidV4()}>{item.title1}</span>
            }
            </div>
            <span className="gros-titre5"> {

              <h1 key={uuidV4()}>{item.title2}</h1>
            }
            </span>
            <div className="le-text5"> {
              <ul>
                  <li key={uuidV4()}>{item.text1}</li>
                  <li key={uuidV4()}>{item.text2}</li>
                  <li key={uuidV4()}>{item.text3}</li>
              </ul>
            
            }
            </div>
            <ul className="mini-lien5"> {item.listDeLien.map(item =>


              <a key={uuidV4()}>{item.lien}</a>

            )}
            </ul>
            <div className="auteur-bis5">
            <ul>
            <img src={item.srcListe1} alt=""/>
            <img src={item.srcListe2} alt=""/>
            <img src={item.srcListe3} alt=""/>
            <img src={item.srcListe4} alt=""/>
            </ul>
            <ul>
            <img src={item.srcListe5} alt=""/>
            <img src={item.srcListe6} alt=""/>
            <img src={item.srcListe7} alt=""/>
            <img src={item.srcListe8} alt=""/>
            </ul>
            </div>
          </div>
          <div className="img-src">
            <img src={item.src} alt="" />
          </div>
        </section>

      )}
            {contenuText6.map(item =>
        <section className="section-partie">

          <div>
            <div className="mini-titre6"> {

              <span key={uuidV4()}>{item.title1}</span>
            }
            </div>
            <span className="gros-titre6"> {

              <h1 key={uuidV4()}>{item.title2}</h1>
            }
            </span>
            <div className="le-text6"> {
              <ul>
                  <li key={uuidV4()}>{item.text1}</li>
                  <li key={uuidV4()}>{item.text2}</li>
                  <li key={uuidV4()}>{item.text3}</li>
              </ul>
            
            }
            </div>
            <ul className="mini-lien6"> {item.listDeLien.map(item =>


              <a key={uuidV4()}>{item.lien}</a>

            )}
            </ul>
            <div className="auteur-bis6">
              <p key={uuidV4()}>{item.text}</p>
              <p key={uuidV4()}>{item.marqueSource1}</p>
              <p key={uuidV4()}>{item.marqueSource2}</p>
          </div>
          </div>
          <div className="img-src">
            <img src={item.src} alt="" />
          </div>
        </section>

      )}
    </>
  )
}