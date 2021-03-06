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
    <Window className='storycard_container animated animatedFadeInUp fadeInUp'>
      <WindowHeader className='storycard-header'>
        <span>{storycard.headline}</span>
        {/* <Button>
          <span className='close-icon' />
        </Button> */}
      </WindowHeader>
      <WindowContent>
        <h1>{storycard.title}</h1>
      </WindowContent>
      <div className='storycard_imagecontainer'>
        <img
          className="storycard_image"
          src={process.env.PUBLIC_URL + storycard.imgURL}
          alt={storycard.title}></img>
      </div>
      <Panel variant='well' className='footer'>
        <p>{storycard.introduction}</p>
      </Panel>
    </Window>

  </>
);

StoryCard.story = {
  name: 'default'
};