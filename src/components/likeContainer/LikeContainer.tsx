import { useState } from 'react';
import type { User } from '../../types';
import LikedByContainer from '../likedByContainer/LikedByContainer';
import PostActionBar from '../postActionBar/PostActionBar';
import { classes } from './LikeContainer.st.css';

const LikeContainer = () => {
    const [usersWhoLiked, setUsersWhoLiked] = useState<User[]>([]);
    const likePost = () => {}; // unshift you to the state
    return (
        <div className={classes.likeContainer}>
            <PostActionBar likePost={() => likePost()} />
            <LikedByContainer allUsersWhoLiked={usersWhoLiked} />
        </div>
    );
};

export default LikeContainer;
