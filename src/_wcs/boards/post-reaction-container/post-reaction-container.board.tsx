import React from 'react';
import { createBoard } from '@wixc3/react-board';
import PostReactionContainer from './../../../components/postReactionContainer/PostReactionContainer';

export default createBoard({
    name: 'PostReactionContainer',
    Board: () => <PostReactionContainer />,
    environmentProps: {
        canvasWidth: 565
    }
});
