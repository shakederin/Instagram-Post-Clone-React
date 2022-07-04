import React from 'react';
import { createBoard } from '@wixc3/react-board';
import CommentInfo from './../../../components/commentInfo/CommentInfo';

export default createBoard({
    name: 'CommentInfo',
    Board: () => <CommentInfo creationDate={Date.now()} LikedBy={[]} />,
    environmentProps: {
        canvasWidth: 186,
        canvasHeight: 64,
    },
});
