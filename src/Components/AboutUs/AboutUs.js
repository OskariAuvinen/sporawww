import React from 'react';
import { NavBar } from '../AppBar/AppBar.stories';
import { Headline } from '../Headline/Headline';
import { StoryCard } from '../StoryCard/StoryCard.stories';
import './AboutUs.css'

export const AboutUs = () => {
    const stories = [
        {
            headline: 'Tomi.exe',
            title: 'Mein tramführer',
            introduction: 'Tomi "Mein tramführer" Raitio. Tapahtuman järjestäjä ja kuljettaja. Ei välitä kenestäkään ja johtaa yhdistystä pelolla. Järjestää jurrispåraa vain rahan ja ilmaisen viinan takia. Ei harrastuksia.',
            imgURL: "assets/images/tomi.jpeg",
            linkUrl: 'https://www.youtube.com/watch?v=IZJIQvPpvuc'
        },
        {
            headline: 'Tuomas.exe',
            title: 'Väkivaltapäällikkö',
            introduction: 'Tuomas "Väkivaltapäällikkö" Savela. Tuomas pitää yllä järjestystä ja pahaa oloa. Ääni on kantava ja kirkas. Ulkonäöstä huolimatta asunut Comptonissa johtaen rikollisliigaa. Tykkää junista.',
            imgURL: "assets/images/tuomas.jpeg",
            linkUrl: ''
        },
        {
            headline: 'Sami.exe',
            title: 'Lintuhyvinvointiasiantuntija',
            introduction: 'Sami "Lintuhyvinvointiasiantuntija" Mannola. Sami on yhdistyksemme kantavat siivet, kaikki tietää nokkimisjärjestyksen kun Sami on tikkana paikalla. Lukee Tex Willeriä.',
            imgURL: "assets/images/sami.jpeg",
            linkUrl: ''
        },
        {
            headline: 'Matti.exe',
            title: 'Päihteidenasiantuntija',
            introduction: 'Oskari "Päihteidenasiantuntija" Auvinen. Oskarin tietämys antabuksesta kotipolttoiseen on kuin lukisi aiheesta tuhat kirjaa. Vastaa tapahtumissa Jeesuksen sanasta, jumalan viljasta sekä herkullisista juustokakkuresepteistä. Asuu Kalliossa.',
            imgURL: "assets/images/matti.jpeg",
            linkUrl: ''
        },
        {
            headline: 'Filip.exe',
            title: 'DJ-Sahis',
            introduction: 'Filip "DJ-Sahis" Kgryczzhinskiy. Vuokratyöläinen Varsovan kaduilta. Soittaa neuvostoajan kovimmat ja tykeimmät technot. Ei puhu suomea kun kännissä. Kuvaa klikkaamalla voit tutustua DJ-Sahiksen taidonnäytteeseen',
            imgURL: "assets/images/filip.jpeg",
            linkUrl: "https://youtu.be/UOV3pBYpkdM?t=1m12s"
        }
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