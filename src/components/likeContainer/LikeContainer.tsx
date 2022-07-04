import { useState } from 'react';
import PostActionBar from '../postActionBar/PostActionBar';
import LikedByContainer from '../likedByContainer/LikedByContainer';
import { classes } from './LikeContainer.st.css';
import type { IinitialState, User } from '../../types';
import { getRandomUser } from '../../utils/getRandomUser';

const LikeContainer = () => {
    const randomUser = getRandomUser();
    const [usersWhoLiked, setUsersWhoLiked] = useState<IinitialState>({
        [randomUser.userName]: randomUser,
    });

    const likePost = (user: User) => {
        const mutateState = { ...usersWhoLiked };
        mutateState.hasOwnProperty(user.userName)
            ? delete mutateState[user.userName]
            : (mutateState[user.userName] = user);
        setUsersWhoLiked(mutateState);
    };

    return (
        <div className={classes.root}>
            <PostActionBar likePost={likePost} />
            <LikedByContainer allUsersWhoLiked={usersWhoLiked} />
        </div>
    );
};

export default LikeContainer;
