import React from 'react';
import { NavBar } from '../AppBar/AppBar.stories';
import { ImageCard } from '../ImageCard/ImageCard';
import { Headline } from '../Headline/Headline';
import './Gallery.css';
import {Helmet} from "react-helmet";

export const Gallery = () => {
    const images = [
        {
            imgURL: "assets/images/1.jpg",
            title: 1
        },
        {
            imgURL: "assets/images/2.jpg",
            title: 2
        },
        {
            imgURL: "assets/images/3.jpg",
            title: 3
        },
        {
            imgURL: "assets/images/4.jpg",
            title: 4
        },
        {
            imgURL: "assets/images/5.jpg",
            title: 5
        },
        {
            imgURL: "assets/images/6.jpg",
            title: 6
        },
        {
            imgURL: "assets/images/7.jpg",
            title: 7
        },
        {
            imgURL: "assets/images/8.jpg",
            title: 8
        },
        {
            imgURL: "assets/images/9.jpg",
            title: 9
        },
        {
            imgURL: "assets/images/10.jpg",
            title: 10
        },
        {
            imgURL: "assets/images/11.jpg",
            title: 11
        },
        {
            imgURL: "assets/images/12.jpg",
            title: 12
        },
        {
            imgURL: "assets/images/13.jpg",
            title: 13
        },
        {
            imgURL: "assets/images/14.jpg",
            title: 14
        },
        {
            imgURL: "assets/images/15.jpg",
            title: 15
        },
        {
            imgURL: "assets/images/16.jpg",
            title: 16
        },
        {
            imgURL: "assets/images/17.jpg",
            title: 17
        },
        {
            imgURL: "assets/images/18.jpg",
            title: 18
        },
        {
            imgURL: "assets/images/19.jpg",
            title: 19
        },
        {
            imgURL: "assets/images/20.jpg",
            title: 20
        },
        {
            imgURL: "assets/images/21.jpg",
            title: 21
        },
        {
            imgURL: "assets/images/22.jpg",
            title: 22
        },
        {
            imgURL: "assets/images/23.jpg",
            title: 23
        },
        {
            imgURL: "assets/images/24.jpg",
            title: 24
        },
        {
            imgURL: "assets/images/25.jpg",
            title: 25
        },
        {
            imgURL: "assets/images/26.jpg",
            title: 26
        },
    ]

    const info = {
        headline: "Kuvia menneistä tapahtumista",
        text: ""
    }

    return (

        <div className="Gallery">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Kuvagalleria</title>
            <link rel="canonical" href="https://jurrispora.fi/gallery" />
        </Helmet>
            <div className="GalleryContainer">
            <Headline info={info} />
            <div className="GallerysContainer">
                <div className="GalleryWrapper">
                    {images.map((img, index) => <ImageCard key={img.title + index} image={img}/>)}
                </div>
                </div>
                <NavBar />
            </div>
        </div>
    )
};