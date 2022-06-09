import PostResponseBar from './PostResponseBar';
import LikedByWho from './LikedByWho';
import { classes } from '../style/reply.st.css';

const LikeContainer = () => {
    return (
        <div className={classes.likeContainer}>
            <PostResponseBar />
            <LikedByWho />
        </div>
    );
};

export default LikeContainer;
