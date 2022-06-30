import { useState } from 'react';
import PostActionBar from '../postActionBar/PostActionBar';
import LikedByContainer from '../likedByContainer/LikedByContainer';
import { classes } from './LikeContainer.st.css';
import type { IinisialState, User } from '../../types';
import { getRandomUser } from '../../utils/getRandomUser';

// type userMate = Record<string, User>;

const LikeContainer = () => {
    const randomUser = getRandomUser();
    const [usersWhoLiked, setUsersWhoLiked] = useState<IinisialState>({
        [randomUser.userName]: randomUser,
    });

    const likePost = (user: User) => {
        console.log(usersWhoLiked);
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

// const likePost = (user: User) => {
//     setUsersWhoLiked((prev) => {
//         const userIndex = prev.findIndex(
//             (existingUser) => existingUser.userName === user.userName
//         );
//         return userIndex === -1
//             ? [...prev, user]
//             : [...prev.slice(0, userIndex), ...prev.slice(userIndex + 1)];
//     });
// };

// const likePost = (user: User) => {
//     let currentUsersWhoLiked = [...usersWhoLiked];
//     const filteredArray = currentUsersWhoLiked.filter(
//         (user) => user.userName === user.userName
//     )[0];
//     const indexOfUser = currentUsersWhoLiked.indexOf(filteredArray);
//     if (indexOfUser < 0) {
//         setUsersWhoLiked([...currentUsersWhoLiked, user]);
//     } else {
//         currentUsersWhoLiked.splice(indexOfUser, 1);
//         setUsersWhoLiked(currentUsersWhoLiked);
//     }
// };
