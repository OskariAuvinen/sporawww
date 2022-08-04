import React from 'react';
import { NavBar } from '../AppBar/AppBar.stories';
import { FaqItem } from '../FAQITem/FaqItem';
import './Faq.css';

export const Faq = () => {

    const questions = [
        {
            question: "Mahtuuko vielä mukaan?",
            answer: "Ole yhteydessä tapahtuman järjestäjiin."
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
            answer: "Ehdottmasti. On hyvä tulla katselemaan sekä kuuntelemaan miksi nykyisessä työpaikassaan on monet asiat paremmin."
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
            <div className="FaqContainer">
                <div className="FaqHeadlineWrapper">
                    <h1 className="FaqHeadline">Usein kysytyt kysymykset</h1>
                </div>
                <div className="FaqTextWrapper">
                    <div className="FaqText">
                    Kysymyksiä Jurrispårasta? Täältä löydät vastauksia. Jos et löydä mitä etsit, ethän ota meihin yhteyttä. 
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