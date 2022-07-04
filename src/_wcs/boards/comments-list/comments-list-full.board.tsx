import React from 'react';
import { createBoard } from '@wixc3/react-board';
import CommentsList from './../../../components/commentsList/CommentsList';

export default createBoard({
    name: 'CommentsList - full',
    Board: () => <CommentsList likeComment={() => { }} comments={[{
        content: 'Miss You!',
        creationDate: Date.now(),
        likeComment: () => { },
        user: {
            profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/President_Barack_Obama_%28cropped%29.jpg',
            userName: 'Barak Obama'
        },
        LikedBy: ['Barak Obama', 'BIBI', 'MICHAEL'],
        id: 'himyman'
    }, {
        content: 'love Ya!@',
        creationDate: 10,
        id: 'himan',
        likeComment: () => { },
        LikedBy: [],
        user: {
            userName: 'Benjamin Netanyahu',
            profilePicture: 'https://www.gov.il/BlobFolder/roleholder/benjamin_netanyahu/en/PMNetanyahu.jpg'
        }
    }, {
        content: 'love Ya!@',
        creationDate: 10,
        id: 'himan',
        likeComment: () => { },
        LikedBy: [],
        user: {
            userName: 'Benjamin Netanyahu',
            profilePicture: 'https://www.gov.il/BlobFolder/roleholder/benjamin_netanyahu/en/PMNetanyahu.jpg'
        }
    }, {
        content: 'love Ya!@',
        creationDate: 10,
        id: 'himan',
        likeComment: () => { },
        LikedBy: [],
        user: {
            userName: 'Benjamin Netanyahu',
            profilePicture: 'https://www.gov.il/BlobFolder/roleholder/benjamin_netanyahu/en/PMNetanyahu.jpg'
        }
    }, {
        content: 'love Ya!@',
        creationDate: 10,
        id: 'himan',
        likeComment: () => { },
        LikedBy: [],
        user: {
            userName: 'Benjamin Netanyahu',
            profilePicture: 'https://www.gov.il/BlobFolder/roleholder/benjamin_netanyahu/en/PMNetanyahu.jpg'
        }
    }, {
        content: 'love Ya!@',
        creationDate: 10,
        id: 'himan',
        likeComment: () => { },
        LikedBy: [],
        user: {
            userName: 'Benjamin Netanyahu',
            profilePicture: 'https://www.gov.il/BlobFolder/roleholder/benjamin_netanyahu/en/PMNetanyahu.jpg'
        }
    }, {
        content: 'love Ya!@',
        creationDate: 10,
        id: 'himan',
        likeComment: () => { },
        LikedBy: [],
        user: {
            userName: 'Benjamin Netanyahu',
            profilePicture: 'https://www.gov.il/BlobFolder/roleholder/benjamin_netanyahu/en/PMNetanyahu.jpg'
        }
    }, {
        content: 'love Ya!@',
        creationDate: 10,
        id: 'himan',
        likeComment: () => { },
        LikedBy: [],
        user: {
            userName: 'Benjamin Netanyahu',
            profilePicture: 'https://www.gov.il/BlobFolder/roleholder/benjamin_netanyahu/en/PMNetanyahu.jpg'
        }
    }, {
        content: 'love Ya!@',
        creationDate: 10,
        id: 'himan',
        likeComment: () => { },
        LikedBy: [],
        user: {
            userName: 'Benjamin Netanyahu',
            profilePicture: 'https://www.gov.il/BlobFolder/roleholder/benjamin_netanyahu/en/PMNetanyahu.jpg'
        }
    }, {
        content: 'love Ya!@',
        creationDate: 10,
        id: 'himan',
        likeComment: () => { },
        LikedBy: [],
        user: {
            userName: 'Benjamin Netanyahu',
            profilePicture: 'https://www.gov.il/BlobFolder/roleholder/benjamin_netanyahu/en/PMNetanyahu.jpg'
        }
    }, {
        content: 'love Ya!@',
        creationDate: 10,
        id: 'himan',
        likeComment: () => { },
        LikedBy: [],
        user: {
            userName: 'Benjamin Netanyahu',
            profilePicture: 'https://www.gov.il/BlobFolder/roleholder/benjamin_netanyahu/en/PMNetanyahu.jpg'
        }
    },]} />,
    environmentProps: {
        canvasWidth: 503,
        canvasHeight: 422
    }
});
