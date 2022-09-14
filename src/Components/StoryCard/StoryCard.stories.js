import React from 'react';
import './StoryCard.css';

import {
  Window,
  WindowContent,
  WindowHeader,
  Panel
} from 'react95';

export const StoryCard = ({ storycard }) => (
  <>
    <Window className='Storycard_container animated animatedFadeInUp fadeInUp'>
      <WindowHeader className='Storycard-header'>
        <span>{storycard.headline}</span>
        {/* <Button>
          <span className='close-icon' />
        </Button> */}
      </WindowHeader>
      <WindowContent>
        <h1>{storycard.title}</h1>
      </WindowContent>
      {storycard.linkUrl === '' ? (
        <div className='Storycard_imagecontainer'>
          <img
            className="Storycard_image"
            src={process.env.PUBLIC_URL + storycard.imgURL}
            alt={storycard.title}
          >
          </img>
        </div>
      ) : (
      <a href={storycard.linkUrl} target="_blank" rel="noreferrer">
      <div className='Storycard_imagecontainer'>
        <img
          className="Storycard_image"
          src={process.env.PUBLIC_URL + storycard.imgURL}
          alt={storycard.title}
        >
        </img>
      </div>
      </a>)}
      <Panel variant='well' className='footer'>
        <p>{storycard.introduction}</p>
      </Panel>
    </Window>

  </>
);

StoryCard.story = {
  name: 'default'
};