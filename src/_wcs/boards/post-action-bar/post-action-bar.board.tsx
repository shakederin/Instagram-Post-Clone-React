import React from 'react';
import { createBoard } from '@wixc3/react-board';
import PostActionBar from './../../../components/postActionBar/PostActionBar';

export default createBoard({
    name: 'PostActionBar',
    Board: () => <PostActionBar likePost={() => {}} />,
    environmentProps: {
        canvasWidth: 464,
    },
});
