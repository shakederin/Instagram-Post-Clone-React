import PostResponseBar from './PostResponseBar';
import LikedByWho from './LikedByWho';
import { classes } from '../style/reply.st.css';

const LikeContainer = () => (
    <div className={classes.likeContainer}>
        <PostResponseBar />
        <LikedByWho />
    </div>
);

export default LikeContainer;
