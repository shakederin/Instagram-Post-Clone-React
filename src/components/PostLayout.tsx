import PostHeader from './PostHeader ';
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
        <PostHeader userName={userName} profilePicture={profilePicture} />
        <CommentsList
            userName={userName}
            description={description}
            profilePicture={profilePicture}
        />
        <PostReactionContainer />
    </div>
);

export default PostLayout;
