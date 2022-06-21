import { useState } from 'react';
import type { User } from '../../types';
import LikedByContainer from '../likedByContainer/LikedByContainer';
import PostActionBar from '../postActionBar/PostActionBar';

const LikeContainer = () => {
    const [usersWhoLiked, setUsersWhoLiked] = useState<User[]>([]);
    const likePost = () => {}; // unshift you to the state
    return (
        <div>
            <PostActionBar likePost={() => likePost()} />
            <LikedByContainer allUsersWhoLiked={usersWhoLiked} />
        </div>
    );
};

export default LikeContainer;
