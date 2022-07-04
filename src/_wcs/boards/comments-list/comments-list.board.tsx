import React from 'react';
import { createBoard } from '@wixc3/react-board';
import CommentsList from './../../../components/commentsList/CommentsList';

export default createBoard({
    name: 'CommentsList',
    Board: () => (
        <CommentsList
            likeComment={() => {}}
            comments={[
                {
                    content: 'Miss You!',
                    creationDate: Date.now(),
                    likeComment: () => {},
                    id: 'f5HAJC&JKF',
                    user: {
                        profilePicture:
                            'https://upload.wikimedia.org/wikipedia/commons/c/c4/President_Barack_Obama_%28cropped%29.jpg',
                        userName: 'Barak Obama',
                    },
                    LikedBy: ['Barak Obama', 'BIBI', 'MICHAEL'],
                },
            ]}
        />
    ),
    environmentProps: {
        canvasWidth: 503,
        canvasHeight: 144,
    },
});
