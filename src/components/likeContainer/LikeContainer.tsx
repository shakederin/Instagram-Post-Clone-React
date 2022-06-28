import { useState } from 'react';
import { PostActionBar } from '../postActionBar/PostActionBar';
import { LikedByContainer } from '../likedByContainer/LikedByContainer';
import { classes } from './LikeContainer.st.css';
import type { User } from '../../types';

export const LikeContainer = () => {
    const [usersWhoLiked, setUsersWhoLiked] = useState<User[]>([]);
    const likePost = (user: User) => {};
    return (
        <div className={classes.root}>
            <PostActionBar likePost={likePost} />
            <LikedByContainer allUsersWhoLiked={usersWhoLiked} />
        </div>
    );
};
