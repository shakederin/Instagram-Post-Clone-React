import { useState } from 'react';
import PostActionBar from '../postActionBar/PostActionBar';
import LikedByContainer from '../likedByContainer/LikedByContainer';
import { MOCK_DATA, SAMPLES_PROFILE_PICTURE } from '../../mockText';
import { classes } from './LikeContainer.st.css';
import type { User } from '../../types';

const LikeContainer = () => {
    const [usersWhoLiked, setUsersWhoLiked] = useState<User[]>([
        { userName: MOCK_DATA.SAMPLE_NAME, profilePicture: SAMPLES_PROFILE_PICTURE[2] },
    ]);

    const likePost = (user: User) => {
        let currentUsersWhoLiked = [...usersWhoLiked];
        let indexOfUser: number = -1;
        for (let i = 0; i < usersWhoLiked.length; i++) {
            if (usersWhoLiked[i].userName === user.userName) {
                indexOfUser = i;
            }
        }
        if (indexOfUser < 0) {
            setUsersWhoLiked([...currentUsersWhoLiked, user]);
        } else {
            currentUsersWhoLiked.splice(indexOfUser, 1);
            setUsersWhoLiked([...currentUsersWhoLiked]);
        }
    };
    return (
        <div className={classes.root}>
            <PostActionBar likePost={likePost} />
            <LikedByContainer allUsersWhoLiked={usersWhoLiked} />
        </div>
    );
};

export default LikeContainer;
