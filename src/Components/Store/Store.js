import React from 'react'; // otettu useState vittuu
// import { SelectTicket } from '../Select/SelectTicket.story';
import { NavBar } from '../AppBar/AppBar.stories';
import { Headline } from '../Headline/Headline';
// import { StoryCard } from '../StoryCard/StoryCard.stories';

import './Store.css';
import { Helmet } from "react-helmet";

// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import { Business } from '../Business/Business';
// import { Economy } from '../Economy/Economy';
// import { CheckoutForm } from '../CheckoutForm/CheckoutForm'
//import React, { useState, useEffect } from 'react';

// const stripePromise = loadStripe("pk_test_51LHTIkBvZGh44FYuaX3o4oCtYfV5BpDWungAeEjHwYPg1zvKqbUyjF9rEwmkMmo7vM3vd9WsMCySND1ps9Nj4oRE00lmn2O4GO");

export const Store = () => {

    // const links = [
    //     {
    //         headline: 'Economy.exe',
    //         title: 'Lippu',
    //         introduction: 'Spåralippu 15 rahaa. Tällä lipulla pääset matkustamaan 15.10.2022 Jurrispårassa',
    //         imgURL: "assets/images/spora_economy.jpg",
    //         linkUrl: 'https://buy.stripe.com/6oE9AAcHJ9XGdCU146'
    //     },
    //     {
    //         headline: 'Business.exe',
    //         title: 'VIP lippu',
    //         introduction: 'Spåralippu 20 rahaa. Tälläkin lipulla pääset matkustamaan 15.10.2022 Jurrispårassa. Vip lippu sisältää jurrispårasangon ja jonkun huonon yllärilahjan.',
    //         imgURL: "assets/images/spora_business.jpg",
    //         linkUrl: 'https://buy.stripe.com/5kA4gggXZd9S7ew5kn'
    //     },
    //     {
    //         headline: 'Kuljetusehdot.exe',
    //         title: 'Matkustusehdot',
    //         introduction: 'Nämä ehdot määrittelevät Jurrispåran ja sen asiakkaiden ”oikeudet” ja velvoitteet.',
    //         imgURL: "assets/images/sporahero.jpg",
    //         linkUrl: 'https://www.jurrispora.fi/terms'
    //     }
    // ]

    const info = {
        headline: "Lippukauppa",
        text: "Hei, täältä voit ostaa itsellesi sähköisen matkustusasiakirjan tapahtumaa varten. Economy-luokan lippu sisältää matkan, Business-luokan lipussa saat VIP-paketin kaupan päälle. VIP-paketissa tulee mukana yllätysämpäri."
    }

    const info2 = {
        headline: "15.10.2022 Tapahtuma loppuun_myyty verkossa",
        text: `Hätätilanteissa otathan yhteyttä asiakaspalveluumme. Asiakaspalvelumme "palvelee" suunnilleen 24h numerossa +358454904999`
    }

    // const handleTicketOption = (e) => {
    //     e.preventDefault();
    //     // console.log(e.target.value);
    //     setTicketType(e.target.value);
    // }

    // const [ticketType, setTicketType] = useState(ticketOptions[0].value);

    // console.log(ticketOptions[0].value);

    return (
        <div className="Store">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Verkkokauppa</title>
                <link rel="canonical" href="https://jurrispora.fi/store" />
            </Helmet>
            <div className="StoreContainer">
                <div className="StoreWrapper">
                    <Headline info={info} />
                    {/* <div className="TicketSelector"> */}
                    {/* <SelectTicket ticketType={ticketType} handleTicketOption={handleTicketOption} ticketOptions={ticketOptions} />
                        <div className="StoreProductContainer">
                            {ticketType == 1 ? (<div className="StoreProductWrapper">
                                <Economy />
                            </div>) : (<div className="StoreProductWrapper">
                                <Business />
                            </div>)}

                            {ticketType === 1 ? (<div className="StoreProductWrapper">
                                <a href="https://buy.stripe.com/6oE9AAcHJ9XGdCU146"><h2>Economy</h2> tää on linkki</a>
                            </div>) : (<div className="StoreProductWrapper">
                                <a href="https://buy.stripe.com/5kA4gggXZd9S7ew5kn"><h2>Business</h2> tääkin on linkki</a>
                            </div>)}

                        </div> */}

                    {/* <div className="StoreLinkWrapper">
                            <div className="StoreLinkItem">
                                <a href="https://buy.stripe.com/6oE9AAcHJ9XGdCU146" target="_blank" rel="noreferrer">Economy-luokan lippu</a>
                            </div>
                            <div className="StoreLinkItem">
                                <a href="https://buy.stripe.com/5kA4gggXZd9S7ew5kn" target="_blank" rel="noreferrer">Business-luokan lippu</a>
                            </div>
                            <div className="StoreLinkItem">
                                <a href="https://www.jurrispora.fi/terms" target="_blank" rel="noreferrer">Kuljetusehdot</a>
                            </div>
                        </div> */}

                    {/* <div className="StoreStoryCardsContainer">
                            <div className="StoryCardsWrapper">
                                {links.map((sc, index) => <StoryCard key={sc.headline + index} storycard={sc} />)}
                            </div>
                        </div> */}

                    {/* {clientSecret && (
                            <Elements options={options} stripe={stripePromise}>
                                <CheckoutForm />
                            </Elements>
                        )} */}
                    <Headline info={info2} />


                    {/* </div> */}
                </div>
                <NavBar />
            </div>
        </div>
    )
}; 