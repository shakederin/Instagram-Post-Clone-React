import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Comment from './../../../components/comment/Comment';

export default createBoard({
    name: 'Comment',
    Board: () => <Comment content={'Nice Photo Man!'} creationDate={new Date()} likeComment={() => { }} LikesCount={1} user={{
        userName: "Barak Obama", profilePicture: "https://upload.wikimedia.org/wikipedia/commons/c/c4/President_Barack_Obama_%28cropped%29.jpg"
    }} />,
    environmentProps: {
        canvasWidth: 479
    }
});
