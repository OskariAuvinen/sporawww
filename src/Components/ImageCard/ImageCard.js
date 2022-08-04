import React from 'react';
import './ImageCard.css';

import {
  Window
} from 'react95';

export const ImageCard = ({ image }) => (
  <>
  <Window className='ImageCard__Container animated animatedFadeInUp fadeInUp'>
  <div className="ImageCard">
    <div className="ImageCard__Wrapper">
        <img
          className="ImageCard__Image"
          src={process.env.PUBLIC_URL + image.imgURL}
          alt={image.title}></img>
    </div>
  </div>
  </Window>

</>
);

ImageCard.story = {
name: 'default'
};