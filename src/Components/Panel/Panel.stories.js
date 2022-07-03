import React from 'react';
import styled from 'styled-components';

import { Panel } from 'react95';

const Wrapper = styled.div`
  padding: 5rem;
  background: ___CSS_0___;
  #default-buttons button {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }

  #cutout {
    background: ___CSS_1___;
    padding: 1rem;
    width: 300px;
  }
`;

export default {
    title: 'Panel',
    component: Panel,
    decorators: [story => <Wrapper>{story()}</Wrapper>]
};

export const GreyBox = ( { h1 }) => (
    <Panel
        variant='outside'
        shadow
        style={{ padding: '0.5rem', lineHeight: '1.5', width: 600 }}
    >
        <h1 style={{ padding: '0.5rem' }}>
            {h1}
        </h1>

    </Panel>
);

GreyBox.story = {
    name: 'default'
};