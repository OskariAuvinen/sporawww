import React from 'react';
import { NavBar } from '../AppBar/AppBar.stories';
import { Headline } from '../Headline/Headline';
import './LiveStream.css'

export const LiveStream = () => {

    const info = {
        headline: "Live",
        text: "Tervetuloa katsomaan livesyötettä jurrisporasta. Lähetys alkaa kun alkaa ja loppuu kun on loppuakseen."
    }

    return (

        <div className="LiveStream">
            <div className="LiveStreamContainer">
                <Headline info={info} />
            <div className="StoryCardsContainer">

            </div>
                <NavBar />
            </div>
        </div>
    )
};