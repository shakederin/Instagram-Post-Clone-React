import Header from './Header';
import CommentsList from './CommentsList';
import PostReactionContainer from './PostReactionContainer';
import { classes } from '../style/main.st.css';

interface IPostInfo {
    userName: string;
    profilePicture: string;
    description: string;
}

const CommentsContainer = ({ userName, description, profilePicture }: IPostInfo) => (
    <div className={classes.commentsContainer}>
        <Header name={userName} profilePicture={profilePicture} />
        <CommentsList name={userName} description={description} profilePicture={profilePicture} />
        <PostReactionContainer />
    </div>
);

export default CommentsContainer;
