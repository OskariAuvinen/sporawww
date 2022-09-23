import React from 'react';
import { Panel } from 'react95';


export const GreyBox = ({ h1 }) => (
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