import React from 'react';
import { createBoard } from '@wixc3/react-board';
import LikedByContainer from './../../../components/likedByContainer/LikedByContainer';

export default createBoard({
    name: 'LikedByContainer with many likes',
    Board: () => <LikedByContainer allUsersWhoLiked={[{
        profilePicture: 'https://www.gov.il/BlobFolder/roleholder/benjamin_netanyahu/en/PMNetanyahu.jpg',
        userName: 'Benjamin Netanyahu'
    }, {
        profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/President_Barack_Obama_%28cropped%29.jpg',
        userName: 'Barak Obama'
    }]} />,
    environmentProps: {
        canvasWidth: 466
    }
});
