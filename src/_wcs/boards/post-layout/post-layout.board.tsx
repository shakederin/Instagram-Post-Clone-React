import React from 'react';
import { createBoard } from '@wixc3/react-board';
import PostLayout from './../../../components/postLayout/PostLayout';

export default createBoard({
    name: 'PostLayout',
    Board: () => <PostLayout owner={{
        userName: 'tonytoscani',
        profilePicture: 'https://cdn.pixabay.com/photo/2021/05/20/11/58/beauty-6268460_1280.jpg'
    }} postData={{
        creationDate: new Date(),
        description: 'Meeeee'
    }} />,
    environmentProps: {
        windowHeight: 861
    }
});
