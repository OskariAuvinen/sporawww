import React from 'react'; // otettu useState vittuu
// import { SelectTicket } from '../Select/SelectTicket.story';
import { NavBar } from '../AppBar/AppBar.stories';
import { Headline } from '../Headline/Headline';
import './Store.css';

// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import { Business } from '../Business/Business';
// import { Economy } from '../Economy/Economy';
// import { CheckoutForm } from '../CheckoutForm/CheckoutForm'
//import React, { useState, useEffect } from 'react';

// const stripePromise = loadStripe("pk_test_51LHTIkBvZGh44FYuaX3o4oCtYfV5BpDWungAeEjHwYPg1zvKqbUyjF9rEwmkMmo7vM3vd9WsMCySND1ps9Nj4oRE00lmn2O4GO");

export const Store = () => {


    // const [clientSecret, setClientSecret] = useState("");

    // useEffect(() => {
    //     // Create PaymentIntent as soon as the page loads
    //     fetch("/store/create-payment-intent", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => setClientSecret(data.clientSecret));
    // }, []);

    // const appearance = {
    //     theme: 'stripe',
    // };
    // const options = {
    //     clientSecret,
    //     appearance,
    // };


    // const ticketOptions = [
    //     { value: 1, label: 'Economy' },
    //     { value: 2, label: 'Business' },

    // ];

    const info = {
        headline: "Lippukauppa",
        text: "Hei, täältä voit ostaa itsellesi sähköisen matkustusasiakirjan tapahtumaa varten. Economy-luokan lippu sisältää matkan, Business-luokan lipussa saat VIP-paketin kaupan päälle. VIP-paketissa tulee mukana yllätysämpäri."
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
            <div className="StoreContainer">
                <div className="StoreWrapper">
                    <Headline info={info} />
                    <div className="TicketSelector">
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

                        <div className="TermsLinkWrapper">
                            <a href="https://www.jurrispora.fi/terms" target="_blank" rel="noreferrer">Economy-luokan lippu</a>
                            <a href="https://www.jurrispora.fi/terms" target="_blank" rel="noreferrer">Business-luokan lippu</a>
                            <a href="https://www.jurrispora.fi/terms" target="_blank" rel="noreferrer">Kuljetusehdot</a>
                        </div>
                        
                        {/* {clientSecret && (
                            <Elements options={options} stripe={stripePromise}>
                                <CheckoutForm />
                            </Elements>
                        )} */}

                    </div>
                </div>
                <NavBar />
            </div>
        </div>
    )
}; 