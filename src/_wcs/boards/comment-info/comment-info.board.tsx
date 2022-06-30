import React from 'react';
import { createBoard } from '@wixc3/react-board';
import CommentInfo from './../../../components/commentInfo/CommentInfo';

export default createBoard({
    name: 'CommentInfo',
    Board: () => <CommentInfo creationDate={new Date()} likesCount={1} />,
    environmentProps: {
        canvasWidth: 306
    }
});
