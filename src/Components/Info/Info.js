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
                        Etkot ja Jatkot:
                    </div>
                    <div className="InfoText">
                        Tapahtuman virallisina etko- ja jatkopaikkoina toimivat Mikonkadun ravintolat Henry's Pub sekä On The Rocks.
                    </div>
                    <div className="InfoTextHeadline">
                        Matkan aikana
                    </div>
                    <div className="InfoText">
                        Lasipullot ja erilliset juoma-astiat, paitsi tapahtuman virallinen VIP-ämpäri, ovat kiellettyjä ja näistä kiinni jäädessään ei neuvotella. Tee siis drinkkisi ennakkoon muovipulloihin ja otathan pienemmät juomat tölkkeinä mukaan.
                    </div>
                    <div className="InfoTextHeadline">
                        Edut:
                    </div>
                    <div className="InfoText">
                    Ajon aika tyrät rytkyää,  rakko hölskyy ja vessaan on päästävä. Niinpä rytmitämme tauot mikonkadulle noin tunnin välein, jossa voitte käyttää yllämainittujen juottoloiden wc-tiloja. Ja jotta hyvä juoma ei haihtuisi kaupunkimme viemäriverkostoon ja kuppilat hyötyisi tästä, ostakaa vessakäynnin yhteydessä, edes osa teistä, tarjoushintainen 2cl shotti 3.25e hinnalla.
                        <p></p>
                        <br></br>
                        <p>On The Rocks myy Salmaria hintaan 3.25e.</p>
                        <br></br>
                        <p>Henry's Pub myy Fisua hintaan 3.25e.</p>
                        <br></br>
                        <p>Tarjous on voimassa tiskillä matkalippua näyttämällä ajon aikana.</p>
                    </div>
                </div>
                <NavBar />
            </div>
        </div>
    )
};