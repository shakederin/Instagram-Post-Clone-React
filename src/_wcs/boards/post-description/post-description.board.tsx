import React from 'react';
import { createBoard } from '@wixc3/react-board';
import PostDescription from './../../../components/postDescription/PostDescription';

export default createBoard({
    name: 'PostDescription',
    Board: () => (
        <PostDescription
            owner={{
                profilePicture:
                    'https://cdn.pixabay.com/photo/2021/05/20/11/58/beauty-6268460_1280.jpg',
                userName: 'tonytoscani',
            }}
            postData={{
                description: 'Meeeee',
                creationDate: new Date(),
            }}
        />
    ),
});
