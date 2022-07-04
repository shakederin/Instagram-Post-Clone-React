import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Username from './../../../components/username/Username';

export default createBoard({
    name: 'Username',
    Board: () => <Username header={false} userName={'tonytoscani'}></Username>,
    environmentProps: {
        canvasWidth: 102,
        canvasHeight: 21
    }
});
