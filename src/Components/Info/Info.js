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
                        Jatkot ja Etkot
                    </div>
                    <div className="InfoText">
                        Tähän tulee sit joskus tietoa virallisista jatkoista
                    </div>
                    <div className="InfoTextHeadline">
                        Matkan aikana
                    </div>
                    <div className="InfoText">
                        Mitä saa tehdä ja mitä ei saa tehdä. Mitä ei kannata tehdä. Muuta hyvä tietää?
                        Aikatauluja ja jotain.
                    </div>
                    <div className="InfoTextHeadline">
                        Edut
                    </div>
                    <div className="InfoText">
                        Tarjoukset ja edut. Varmaan jonkun muun palikan yhteyteen
                    </div>
                </div>
                <NavBar />
            </div>
        </div>
    )
};