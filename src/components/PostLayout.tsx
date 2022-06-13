import Header from './Header';
import CommentsList from './CommentsList';
import PostReactionContainer from './PostReactionContainer';
import { classes } from '../style/main.st.css';

interface IPostInfo {
    userName: string;
    profilePicture: string;
    description: string;
}

const PostLayout = ({ userName, description, profilePicture }: IPostInfo) => (
    <div className={classes.postLayout}>
        <Header name={userName} profilePicture={profilePicture} />
        <CommentsList name={userName} description={description} profilePicture={profilePicture} />
        <PostReactionContainer />
    </div>
);

export default PostLayout;
