import React from 'react';
import { createBoard } from '@wixc3/react-board';
import LikeCommentButton from '../../components/likeCommentButton/LikeCommentButton';

export default createBoard({
    name: 'likeCommentButton',
    Board: () => <div>
        <LikeCommentButton id={'1'} likeComment={() => { }} LikedBy={[]} userName={}></LikeCommentButton>
    </div>
});
