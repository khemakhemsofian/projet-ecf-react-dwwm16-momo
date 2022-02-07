import React from "react";
import ReactDOM from 'react-dom';
import { v4 as uuidV4 } from "uuid";
import { Form, Button } from 'react-bootstrap/';



import '../Contenu';

export const Contact = (props) => {
    const contenuContact = [
        {
            title: "Contacter notre équipe commerciale",
            title2: "Nous sommes ravis de répondre à vos questions et de vous présenter Slack.",
            text1: "Conservez vos pratiques de sécurité des données tout en collaborant avec des partenaires de confiance",
            text2: "Connectez-vous à vos collaborateurs, clients et partenaires de manière centralisée",
            text3: "Réduisez les changements d’environnement de travail, augmentez la transparence et la productivité",

            listDeLien: [
                { text: "Pour toute question technique et demande générale, veuillez", lien: "vous rendre sur notre centre d’assistance.", href: "#" },
            ],
            marqueSource1: "Zendesk",
            marqueSource2: "Mike Yakovlev, directeur des alliances technologiques",

        },
    ]
    return (

        <>
            <section className="section-page">
                {contenuContact.map(item =>
                    <div className="contenu">
                        <div>
                            <span className="titre-du-contenu"> {

                                <h1 key={uuidV4()}>{item.title}</h1>
                            }
                            </span>
                            <span className="titre-du-contenu2"> {

                                <h1 key={uuidV4()}>{item.title2}</h1>
                            }
                            </span>
                            <div className="list-text"> {
                                <ul>
                                    <li key={uuidV4()}>{item.text1}</li>
                                    <li key={uuidV4()}>{item.text2}</li>
                                    <li key={uuidV4()}>{item.text3}</li>
                                </ul>

                            }
                            </div>
                            <ul className="lien-du-contenu"> {item.listDeLien.map(item =>


                                <a key={uuidV4()}>{item.text}{item.lien}</a>

                            )}
                            </ul>
                        </div>
                    </div>
                )}
            </section>

            <section className="contenu-bas">
                <Form>
                    <Form.Group className="lg" controlId="formBasicText">
                        <Form.Control type="lg" placeholder="Votre prénom" />
                        <Form.Control type="lg" placeholder="Votre Nom" />
                    </Form.Group>
                    <Form.Group className="lg" controlId="formBasicEmail">
                        <Form.Label>Adresse e-mail professionnelle</Form.Label>
                        <Form.Control type="email" placeholder="example@abc.com" />
                    </Form.Group>
                    <Form.Select aria-label="Default select example">
                        <option>Pays</option>
                        <option value="1">France</option>
                        <option value="2">Belgique</option>
                        <option value="3">Italie</option>
                    </Form.Select>
                    <Form.Group className="lg" controlId="formBasicText">
                        <Form.Control type="lg" placeholder="Nom De l'Entreprise" />
                        <Form.Select aria-label="Default select example">
                            <option>Taille entreprise</option>
                            <option value="1">0-100</option>
                            <option value="2">101-200</option>
                            <option value="3">201-400</option>
                            <option value="4">401-1500</option>
                            <option value="5">1501-10000</option>
                            <option value="6">+ De 10001</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="lg" controlId="formBasicText">
                        <Form.Select aria-label="Default select example">
                            <option>Service</option>
                            <option value="1">Développement/ingénierie</option>
                            <option value="2">Informatique</option>
                            <option value="3">Ventes</option>
                            <option value="4">Assistance et succès</option>
                            <option value="5">Marketing</option>
                            <option value="6">Finance/juridique/opérations</option>
                            <option value="9">RH/personnes</option>
                            <option value="10">Stratégie/développement de l’entreprise</option>
                        </Form.Select>
                        <Form.Select aria-label="Default select example">
                            <option>Role</option>
                            <option value="1">Cadre Dirigeant</option>
                            <option value="2">Vice-président</option>
                            <option value="3">directeur</option>
                            <option value="4">Responsable</option>
                            <option value="5">Contributeur</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="lg" controlId="formBasicText">
                        <Form.Control type="lg" placeholder="Numéro de tel" />
                        <Form.Select aria-label="Default select example">
                            <option>Role</option>
                            <option value="1">Je souhaite déterminer si Slack est la bonne solution pour mon organisation</option>
                            <option value="2">Je souhaite déterminer quel forfait Slack me convient le mieux</option>
                            <option value="3">Je souhaite acheter des licences ou passer à un forfait supérieur</option>
                            <option value="4">J’ai une question concernant le produit</option>
                            <option value="5">J’ai besoin d’un plan de conformité</option>
                        </Form.Select>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Des questions(falcutatif</Form.Label>
                            <Form.Control as="textarea" rows={5} placeholder="Avez-vous des besoins particuliers concernant Slack ?" />
                        </Form.Group>
                    </Form.Group>
                    <Form.Group className="lg" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Oui, j’accepte de recevoir des communications marketing à propos de Slack. Si je change d’avis, je peux me désinscrire à tout moment." />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </section>
        </>

    )
}


