import React from 'react';
import { createBoard } from '@wixc3/react-board';
import InstagramPost from './../../../components/instagramPost/InstagramPost';

export default createBoard({
    name: 'InstagramPost',
    Board: () => (
        <InstagramPost
            imgUrls={[
                "'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'",
            ]}
            owner={{
                profilePicture:
                    'https://cdn.pixabay.com/photo/2021/05/20/11/58/beauty-6268460_1280.jpg',
                userName: 'tonytoscani',
            }}
            postData={{
                creationDate: new Date(),
                description: 'Meee',
            }}
            key={null}
        />
    ),
    environmentProps: {
        canvasWidth: 5,
        windowHeight: 997,
    },
});
