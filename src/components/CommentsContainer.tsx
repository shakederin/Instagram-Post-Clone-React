import CommentsList from './CommentsList';
import Header from './Header';
import { classes } from '../style/main.st.css';
import PostReply from './PostReply';

interface postInfo {
    userName: string;
    profilePicture: string;
    postDescription: string;
}

const CommentsContainer = ({ userName, postDescription, profilePicture }: postInfo) => {
    return (
        <div className={classes.commentsContainer}>
            <Header name={userName} profilePicture={profilePicture} />
            <CommentsList
                name={userName}
                postDescription={postDescription}
                profilePicture={profilePicture}
            />
            <PostReply />
        </div>
    );
};

export default CommentsContainer;
