import React from 'react';
import styled from 'styled-components';
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Panel
} from 'react95';

export default {
  title: 'Window',
  component: Window,
  subcomponents: { WindowHeader, WindowContent },
  decorators: [story => <Wrapper>{story()}</Wrapper>]
};
const Wrapper = styled.div`
  padding: 5rem;
  background: ___CSS_0___;
  .window-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .close-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    transform: rotateZ(45deg);
    position: relative;
    &:before,
    &:after {
      content: '';
      position: absolute;
      background: ___CSS_1___;
    }
    &:before {
      height: 100%;
      width: 3px;
      left: 50%;
      transform: translateX(-50%);
    }
    &:after {
      height: 3px;
      width: 100%;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .window {
    width: 400px;
    min-height: 200px;
  }
  .window:nth-child(2) {
    margin: 2rem;
  }
  .footer {
    display: block;
    margin: 0.25rem;
    height: 31px;
    line-height: 31px;
    padding-left: 0.25rem;
  }
`;
export const StoryCard = ({ storycard }) => (
  <>
    <Window className='storycard_container'>
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
          src={storycard.imrURL}
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