import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Comment from './../../../components/comment/Comment';

export default createBoard({
    name: 'Comment with many likes',
    Board: () => <Comment content={'Nice Photo Man!'} creationDate={Date.now()} likeComment={() => { }} user={{
        userName: "Barak Obama", profilePicture: "https://upload.wikimedia.org/wikipedia/commons/c/c4/President_Barack_Obama_%28cropped%29.jpg"
    }} LikedBy={['you', 'you', 'Barak Obama', '', '', '', '']} id={''} />,
    environmentProps: {
        canvasWidth: 479
    }
});
