import React from 'react';
import { NavBar } from '../AppBar/AppBar.stories';
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
    return (

        <div className="AboutUs">
            <div className="AboutUsContainer">
                <div className="StoryCardWrapper">
                    {stories.map((sc, index) => <StoryCard key={sc.headline + index} storycard={sc}/>)}
                </div>
                <NavBar />
            </div>
        </div>
    )
};