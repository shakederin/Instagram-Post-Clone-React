import { useState } from 'react';
import type { User } from '../../types';
import LikedByContainer from '../likedByContainer/LikedByContainer';
import PostActionBar from '../postActionBar/PostActionBar';
import { classes } from './LikeContainer.st.css';

const LikeContainer = () => {
    const [usersWhoLiked, setUsersWhoLiked] = useState<User[]>([]);

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
        <div className={classes.likeContainer}>
            <PostActionBar likePost={likePost} />
            <LikedByContainer allUsersWhoLiked={usersWhoLiked} />
        </div>
    );
};

export default LikeContainer;
