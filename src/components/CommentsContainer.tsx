import CommentsList from './CommentsList';
import Header from './Header';
import { classes } from '../style/main.st.css';
import PostReply from './PostReply';

interface postInfo {
    userName: string;
    profilePicture: string;
    postDescription: string;
}

const CommentsContainer = (props: postInfo) => {
    return (
        <div className={classes.commentsContainer}>
            <Header name={props.userName} profilePicture={props.profilePicture} />
            <CommentsList name={props.userName} profilePicture={props.profilePicture} />
            <PostReply />
        </div>
    );
};

export default CommentsContainer;
