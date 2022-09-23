import React from 'react';
import styled from 'styled-components';
import {
  Window,
  WindowContent,
  WindowHeader,
  // Button,
  // Panel
} from 'react95';

/* eslint-disable */
export default {
  title: 'Window',
  component: Window,
  subcomponents: { WindowHeader, WindowContent },
  decorators: [story => <Wrapper>{story()}</Wrapper>]
};
/* eslint-enable */

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
export const HeadlineWindow = ({ h1 }) => (
  <>
    <Window className='window'>
      <WindowHeader className='window-header'>
        <span>Jurrispora.exe</span>
        {/* <Button>
          <span className='close-icon' />
        </Button> */}
      </WindowHeader>
      {/* <Toolbar>
        <Button variant='menu' size='sm'>
          File
        </Button>
        <Button variant='menu' size='sm'>
          Edit
        </Button>
        <Button variant='menu' size='sm' disabled>
          Save
        </Button>
      </Toolbar> */}
      <WindowContent>
        <h1>{h1}</h1>
      </WindowContent>
      {/* <Panel variant='well' className='footer'>
        <p>JurriSpåran verkkosivu, galleria, verkkokauppa yms.. Navigoi painamalla "Aloita" alanavigaatiosta. Moi T.</p>
      </Panel> */}
    </Window>
    {/* 
    <Window className='window'>
      <WindowHeader active={false} className='window-header'>
        <span>not-active.exe</span>
        <Button>
          <span className='close-icon' />
        </Button>
      </WindowHeader>
      <WindowContent>I am not active</WindowContent>
    </Window> */}
  </>
);

HeadlineWindow.story = {
  name: 'default'
};