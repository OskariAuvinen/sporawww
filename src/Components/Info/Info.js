import React from 'react';
import { NavBar } from '../AppBar/AppBar.stories';
import './Info.css';
import { Helmet } from "react-helmet";

export const Info = () => {
    return (

        <div className="Info">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Info</title>
                <link rel="canonical" href="https://jurrispora.fi/info" />
            </Helmet>
            <div className="InfoContainer">
                <div className="InfoHeadlineWrapper">
                    <h1 className="InfoHeadline">Hyvä tietää:</h1>
                </div>
                <div className="InfoWrapper">
                    <div className="InfoTextHeadline">
                        Etkot ja Jatkot
                    </div>
                    <div className="InfoText">
                        Tapahtuman virallisina etko- ja jatkopaikkoina toimivat Mikonkadun ravintolat Henry's Pub sekä On The Rocks. 
                    </div>
                    <div className="InfoTextHeadline">
                        Matkan aikana
                    </div>
                    <div className="InfoText">
                        Lasipullot ja erilliset juoma-astiat ovat kiellettyjä ja näistä kiinni jäädessään ei neuvotella. Tee siis drinkkisi ennakkoon muovipulloihin ja otathan pienemmät juomat tölkkeinä mukaan.
                    </div>
                    <div className="InfoTextHeadline">
                        Edut
                    </div>
                    <div className="InfoText">
                        Ajon aikana kusitauot pyritään järjestämään n. tunnin välein yllä mainituissa baareissa. WC:ssä käynti aiheuttaa humalaa, koska se edellyttää osaa teitä wc:ssä käyviä ostamaan 2cl shotin, jonka olemme saaneet tarjoushinnalla 3,25.
                        <br></br>
                        <p>On The Rocks 2cl Salmaria.</p>
                        <br></br>
                        <p>Henry's Pub 2cl Fisua.</p>
                        <br></br>
                        <p>Tarjous on voimassa tiskillä matkalippua näyttämällä ajon aikana.</p>
                    </div>
                </div>
                <NavBar />
            </div>
        </div>
    )
};