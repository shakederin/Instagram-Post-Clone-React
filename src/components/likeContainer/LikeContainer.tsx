import { useState } from 'react';
import PostActionBar from '../postActionBar/PostActionBar';
import LikedByContainer from '../likedByContainer/LikedByContainer';
import { classes } from './LikeContainer.st.css';
import type { User } from '../../types';
import { getRandomUser } from '../../utils/getRandomUser';

const LikeContainer = () => {
    const [usersWhoLiked, setUsersWhoLiked] = useState<User[]>([getRandomUser()]);

    const likePost = (user: User) => {
        let currentUsersWhoLiked = [...usersWhoLiked];
        let indexOfUser = -1;
        for (let i = 0; i < usersWhoLiked.length; i++) {
            if (usersWhoLiked[i].userName === user.userName) {
                indexOfUser = i;
            }
        }
        if (indexOfUser < 0) {
            setUsersWhoLiked([...currentUsersWhoLiked, user]);
        } else {
            currentUsersWhoLiked.splice(indexOfUser, 1);
            setUsersWhoLiked(currentUsersWhoLiked);
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
