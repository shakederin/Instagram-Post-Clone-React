import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { App } from './../../../app';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowHeight: 945,
        canvasWidth: 5,
        windowWidth: 1420
    }
});
