import React from 'react';
import { createBoard } from '@wixc3/react-board';
import LikeCommentButton from '../../components/likeCommentButton/LikeCommentButton';

export default createBoard({
    name: 'unlikeCommentButton',
    Board: () => <div>
        <LikeCommentButton likeComment={() => { }} id={'2'} LikedBy={[]} userName={''} src="hello Ari" />
    </div>,
});
