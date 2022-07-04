import React from 'react';
import { createBoard } from '@wixc3/react-board';
import ProfilePicture from './../../../components/profilePicture/ProfilePicture';

export default createBoard({
    name: 'ProfilePicture with story',
    Board: () => <ProfilePicture src="https://cdn.pixabay.com/photo/2021/05/20/11/58/beauty-6268460_1280.jpg" story={true} />
});
