import LikedByContainer from './LikedByContainer';
import PostActionBar from './PostActionBar';
import { classes } from '../style/reply.st.css';

const LikeContainer = () => {
    //state allPeopleWhoLiked
    const likePost = () => {}; // unshift you to the state
    return (
        <div className={classes.likeContainer}>
            <PostActionBar likePost={() => likePost()} />
            <LikedByContainer
                allPeopleWhoLiked={[
                    { userName: 'Sagiv', profilePicture: '' },
                    { userName: 'Ari', profilePicture: '' },
                ]}
            />
        </div>
    );
};

export default LikeContainer;
