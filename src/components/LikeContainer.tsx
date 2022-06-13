import LikedByWho from './LikedByWho';
import PostResponseBar from './PostResponseBar';
import { classes } from '../style/reply.st.css';

const LikeContainer = () => (
    <div className={classes.likeContainer}>
        <PostResponseBar />
        <LikedByWho />
    </div>
);

export default LikeContainer;
