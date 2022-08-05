import React from 'react';
import { NavBar } from '../AppBar/AppBar.stories';
import { Headline } from '../Headline/Headline';
import { StoryCard } from '../StoryCard/StoryCard.stories';
import './AboutUs.css'

export const AboutUs = () => {
    const stories = [
        {
            headline: 'Tomi.exe',
            title: 'spårafuhrer',
            introduction: 'Tomi on raitiovaunun kuljettaja ja kuljettaa raitiovaunua. Tomi tykkää junista',
            imgURL: "assets/images/tomi.jpg"
        },
        {
            headline: 'Tuomas.exe',
            title: 'Väkivaltavastaava',
            introduction: 'Tuomas on teknologiaJeesus ja vastaa väkivallasta. Tuomas tykkää myös junista',
            imgURL: "assets/images/tuomas.jpg"
        },
        {
            headline: 'Sami.exe',
            title: 'Juomamestari',
            introduction: 'Samin tehtävä on vastata matkustajien päihtymistilasta sekä tarjoilusta. Sami tykkää linnuista',
            imgURL: "assets/images/sami.jpg"
        },
        {
            headline: 'Matti.exe',
            title: 'Jeesus',
            introduction: 'Matti pitää huolta haureudesta sekä matkustajien sieluista. Osaa muuttaa veden viiniksi',
            imgURL: "assets/images/matti.jpg"
        },
    ]

    const info = {
        headline: "Meistä",
        text: "Keitä me olemme? Meidän tarinamme."
    }

    return (

        <div className="AboutUs">
            <div className="AboutUsContainer">
                <Headline info={info} />
            <div className="StoryCardsContainer">
                <div className="StoryCardsWrapper">
                    {stories.map((sc, index) => <StoryCard key={sc.headline + index} storycard={sc}/>)}
                </div>
            </div>
                <NavBar />
            </div>
        </div>
    )
};