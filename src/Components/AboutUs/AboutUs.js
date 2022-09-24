import React from 'react';
import { NavBar } from '../AppBar/AppBar.stories';
import { Headline } from '../Headline/Headline';
import { StoryCard } from '../StoryCard/StoryCard.stories';
import './AboutUs.css';
import { Helmet } from "react-helmet";

export const AboutUs = () => {
    const stories = [
        {
            headline: 'Tomi.exe',
            title: 'Mein tramführer',
            introduction: 'Tomi "Mein tramführer" Raitio. Tapahtuman järjestäjä ja kuljettaja. Ei välitä kenestäkään ja johtaa yhdistystä pelolla. Järjestää jurrispåraa vain rahan ja ilmaisen viinan takia. Ei harrastuksia.',
            imgURL: "assets/images/tomi.jpeg",
            // linkUrl: 'https://www.youtube.com/watch?v=IZJIQvPpvuc'
            linkUrl: ''
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
            introduction: 'Filip "DJ-Sahis" Kgryczzhinskiy. Vuokratyöläinen Varsovan kaduilta. Soittaa neuvostoajan kovimmat ja tykeimmät technot. Ei puhu suomea kun kännissä. Kuvaa klikkaamalla voit tutustua DJ-Sahiksen taidonnäytteeseen. Tykkää konsonanteista.',
            imgURL: "assets/images/filip.jpeg",
            linkUrl: "https://youtu.be/UOV3pBYpkdM?t=1m12s"
        },
        {
            headline: 'Emma.exe',
            title: 'Kiintiönainen',
            introduction: 'Emma "muija" Kääpiö. Uusin jäsenemme toksisen maskuliiniseen ryhmäämme on muija Kontulasta. Tulee reissulle työkokeiluun setien kanssa. Haaveammattina bubiruusuilu.',
            imgURL: "assets/images/emma.jpeg",
            linkUrl: ''
        }
    ]

    const info = {
        headline: "Meistä",
        text: "Keitä me olemme? Meidän tarinamme. Toisin sanoen Interpolin etsityimmät."
    }

    return (

        <div className="AboutUs">
            <Helmet>
                <meta charSet="utf-8" />
                <link rel="icon" href="%PUBLIC_URL%/assets/images/tram2.png" />
                <title>Tietoa meistä</title>
                <link rel="canonical" href="https://jurrispora.fi/aboutus" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Jurrispåra | Keitä me olemme? Meidän tarinamme. Toisin sanoen Interpolin etsityimmät. " />
                <meta property="og:locale" content="fi_FI" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Jurrispåra | Keitä me olemme? Meidän tarinamme. Toisin sanoen Interpolin etsityimmät." />
                <meta property="og:description"
                    content="Jurrispåra Ry | Meistä | Elämyksiä vuodesta 2019" />
                <meta property="og:url" content="https://www.jurrispora.fi/aboutus" />
                <meta property="og:site_name" content="Jurrispåra Ry" />
                <meta property="og:image" content="%PUBLIC_URL%/assets/images/18.jpg" />
                <meta property="og:image:width" content="1403" />
                <meta property="og:image:height" content="739" />
                <meta property="og:image:type" content="image/jpg" />
            </Helmet>
            <div className="AboutUsContainer">
                <Headline info={info} />
                <div className="StoryCardsContainer">
                    <div className="StoryCardsWrapper">
                        {stories.map((sc, index) => <StoryCard key={sc.headline + index} storycard={sc} />)}
                    </div>
                </div>
                <NavBar />
            </div>
        </div>
    )
};