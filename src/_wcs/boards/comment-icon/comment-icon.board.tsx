import React from 'react';
import { createBoard } from '@wixc3/react-board';
import CommentIcon from './../../../components/postActionBar/CommentIcon';

export default createBoard({
    name: 'CommentIcon',
    Board: () => <CommentIcon />
});
