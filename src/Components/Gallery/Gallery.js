import React from 'react';
import { NavBar } from '../AppBar/AppBar.stories';
import './Gallery.css';

export const Gallery = () => {

    return (

        <div className="Gallery">
            <div className="GalleryContainer">
                <div className="GalleryWrapper">
                    Gallery.js
                </div>
                <NavBar />
            </div>
        </div>
    )
};