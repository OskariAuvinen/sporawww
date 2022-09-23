import React from 'react';
import { NavBar } from '../AppBar/AppBar.stories';
import { FaqItem } from '../FAQITem/FaqItem';
import './Faq.css';
import {Helmet} from "react-helmet";

export const Faq = () => {

    const questions = [
        {
            question: "Mahtuuko vielä mukaan?",
            answer: "Ole yhteydessä tapahtuman järjestäjiin."
        },
        {
            question: "Mitä kuuluu VIP-lippuun?",
            answer: "Mielettömän kunnian, maineen ja jurrisporan henkilökunnan elinehtojen pelastamisen lisäksi saat mahtavan virallisen ja harvinaisen jurrispora-ämpärin, joka on täytetty (tai no pohjalla ainakin yksi kappale) yllätystuotteita. Ämpäri itsessään on jo keräilyharvinaisuus sekä brändituote, josta riittää iloa koko perheelle ympäri vuoden. Lisäksi saat erittäin hyvällä todennäköisyydellä istumapaikan VIP-osastosta (sama kuin normiosasto)."
        },
        {
            question: "Olen myöhässä, mitä teen?",
            answer: "Myöhästyneitä ei noudeta mistään. Jos satut osumaan tauolla, tietenkin olet tervetullut kyytiin kuljetusehdot täyttävää matkustusasiakirjaa näyttämällä."
        },
        {
            question: "Saako juoda viiniä pullosta?",
            answer: "Lasipullot, mukit yms sotkevat ja hajotessaan vaaraa aiheuttavat asiat ovat kielletty ja paheksumisen lisäksi johtavat usein matkan katkeamiseen mahdollisimman syrjäisellä pysäkillä."
        },
        {
            question: "Moneltas tää mehulinko nyt sitte lähtis?",
            answer: "Luultavasti tapahtuman ilmoitettuun lähtöaikaan. Jos et osaa lukea, suosittelemme kokeilemaan kristallipalloa tai tähtikuvioiden asennoista ennustamista."
        },
        {
            question: "Pitäsköhän sitä tulla herättelee *FirmaX:n* muistoja?",
            answer: "Ehdottomasti. On hyvä tulla katselemaan sekä kuuntelemaan miksi nykyisessä työpaikassaan on monet asiat paremmin."
        },
        {
            question: "Haluan paritella Niko *****ston kanssa ohjaamossa. Sisältyykö kymppiin?",
            answer: "Palvelut vaihtuvat tapahtuman sekä osallistujien mukaan. Joskus vastaus on ollut: Ohjaamossa voi touhuilla."
        },
        {
            question: "Olikos se jatkopaikka sama ku viime vuonna?",
            answer: "Jatkopaikka määrääntyy matkustajien päihtymistilan mukaan. Eli jo perinteiseen tapaan ihmiset varmasti hajaantuvat osiin matkan päättyessä tai sen aikana. Nämä siis tarkentuvat reissun aikana."
        },
    ]

    return (

        <div className="Faq">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Usein kysytyt kysymykset</title>
                <link rel="canonical" href="https://jurrispora.fi/faq" />
            </Helmet>
            <div className="FaqContainer">
                <div className="FaqHeadlineWrapper">
                    <h1 className="FaqHeadline">Usein kysytyt kysymykset</h1>
                </div>
                <div className="FaqTextWrapper">
                    <div className="FaqText">
                        Kysymyksiä Jurrispårasta? Täältä löydät vastauksia. Jos et löydä mitä etsit, ethän ota meihin yhteyttä. Asiakaspalvelumme ei palvele numerossa <a href="tel:+358454904999">+358454904999</a>.
                    </div>
                </div>
                <div className="FaqWrapper">
                    {questions.map((q, index) => <FaqItem key={q.question + index} item={q} />)}
                </div>
                <NavBar />
            </div>
        </div>
    )
};