import React from 'react';
import { createBoard } from '@wixc3/react-board';
import ProfilePicture from '../../components/profilePicture/ProfilePicture';

export default createBoard({
    name: 'profiePicture',
    Board: () => <div>
        <ProfilePicture src={'https://avatars.githubusercontent.com/u/89574610?s=40&v=4'} />
    </div>
});
