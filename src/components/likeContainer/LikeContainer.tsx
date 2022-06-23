import { useState } from 'react';
import PostActionBar from '../postActionBar/PostActionBar';
import LikedByContainer from '../likedByContainer/LikedByContainer';
import { classes } from './LikeContainer.st.css';
import type { User } from '../../types';

const LikeContainer = () => {
    const [usersWhoLiked, setUsersWhoLiked] = useState<User[]>([]);
    const likePost = () => {}; // unshift you to the state
    return (
        <div className={classes.root}>
            <PostActionBar likePost={() => likePost()} />
            <LikedByContainer allUsersWhoLiked={usersWhoLiked} />
        </div>
    );
};

export default LikeContainer;
