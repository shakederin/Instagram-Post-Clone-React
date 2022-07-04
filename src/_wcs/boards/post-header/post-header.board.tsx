import React from 'react';
import { createBoard } from '@wixc3/react-board';
import PostHeader from './../../../components/postHeader/PostHeader ';

export default createBoard({
    name: 'PostHeader',
    Board: () => <PostHeader owner={{
        profilePicture: 'https://cdn.pixabay.com/photo/2021/05/20/11/58/beauty-6268460_1280.jpg',
        userName: 'tonytoscani'
    }} />,
    environmentProps: {
        canvasWidth: 499
    }
});
