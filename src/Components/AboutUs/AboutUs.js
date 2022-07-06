import React from 'react';
import { NavBar } from '../AppBar/AppBar.stories';
import { StoryCard } from '../StoryCard/StoryCard.stories';
import './AboutUs.css'
import tomi from '../../assets/images/matti.jpg'
import tuomas from '../../assets/images/tuomas.jpg'
import sami from '../../assets/images/sami.jpg'
import matti from '../../assets/images/matti.jpg'


export const AboutUs = ({ }) => {
    const stories = [
        {
            headline: 'Tomi.exe',
            title: 'spårafuhrer',
            introduction: 'Tomi on raitiovaunun kuljettaja ja kuljettaa raitiovaunua. Tomi tykkää junista',
            imrURL: tomi
        },
        {
            headline: 'Tuomas.exe',
            title: 'Väkivaltavastaava',
            introduction: 'Tuomas on teknologiaJeesus ja vastaa väkivallasta. Tuomas tykkää myös junista',
            imrURL: tuomas
        },
        {
            headline: 'Sami.exe',
            title: 'Juomamestari',
            introduction: 'Samin tehtävä on vastata matkustajien päihtymistilasta sekä tarjoilusta. Sami tykkää linnuista',
            imrURL: sami
        },
        {
            headline: 'Matti.exe',
            title: 'Jeesus',
            introduction: 'Matti pitää huolta hauraudesta sekä matkustajien sieluista. Osaa muuttaa veden viiniksi',
            imrURL: matti
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