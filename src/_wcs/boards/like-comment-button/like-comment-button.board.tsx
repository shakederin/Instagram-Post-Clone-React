import React from 'react';
import { createBoard } from '@wixc3/react-board';
import LikeCommentButton from './../../../components/likeCommentButton/LikeCommentButton';

export default createBoard({
    name: 'LikeCommentButton',
    Board: () => <LikeCommentButton likeComment={() => {}} LikedBy={[]} userName={''} id={''} />,
    environmentProps: {
        canvasWidth: 17,
    },
});
