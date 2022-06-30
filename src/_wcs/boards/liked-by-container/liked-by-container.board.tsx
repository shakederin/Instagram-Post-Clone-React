import React from 'react';
import { createBoard } from '@wixc3/react-board';
import LikedByContainer from './../../../components/likedByContainer/LikedByContainer';

export default createBoard({
    name: 'LikedByContainer',
    Board: () => <LikedByContainer allUsersWhoLiked={[]} />
});
