import React from 'react';
import { createBoard } from '@wixc3/react-board';
import CommentContent from './../../../components/commentContent/CommentContent';

export default createBoard({
    name: 'CommentContent',
    Board: () => <CommentContent content={'Nice photo!'} />
});
