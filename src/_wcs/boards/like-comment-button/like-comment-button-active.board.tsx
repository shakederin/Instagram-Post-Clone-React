import React from 'react';
import { createBoard } from '@wixc3/react-board';
import LikeCommentButton from './../../../components/likeCommentButton/LikeCommentButton';

export default createBoard({
    name: 'LikeCommentButton active',
    Board: () => (
        <LikeCommentButton likeComment={() => { }} LikedBy={['barak']} userName={'barak'} id={''} isLiked={true} />
    ),
    environmentProps: {
        canvasWidth: 17,
    },
});
