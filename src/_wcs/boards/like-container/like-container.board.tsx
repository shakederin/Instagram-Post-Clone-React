import React from 'react';
import { createBoard } from '@wixc3/react-board';
import LikeContainer from './../../../components/likeContainer/LikeContainer';

export default createBoard({
    name: 'LikeContainer',
    Board: () => <LikeContainer />,
    environmentProps: {
        canvasWidth: 556
    }
});
