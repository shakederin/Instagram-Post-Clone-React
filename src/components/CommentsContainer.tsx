import CommentsList from './CommentsList';
import Header from './Header';
import { classes } from '../style/main.st.css';
import PostReply from './PostReply';

interface IPostInfo {
    userName: string;
    profilePicture: string;
    description: string;
}

const CommentsContainer = ({ userName, description, profilePicture }: IPostInfo) => (
    <div className={classes.commentsContainer}>
        <Header name={userName} profilePicture={profilePicture} />
        <CommentsList name={userName} description={description} profilePicture={profilePicture} />
        <PostReply />
    </div>
);

export default CommentsContainer;
