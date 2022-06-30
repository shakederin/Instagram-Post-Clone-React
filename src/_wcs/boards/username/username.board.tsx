import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Username from './../../../components/username/Username';

export default createBoard({
    name: 'Username',
    Board: () => <Username header={true} userName={'tonytoscani'}></Username>,
    environmentProps: {
        canvasWidth: 260
    }
});
