import { classes } from '../style/comments.st.css';

const CommentInfo = ({ isOwnerComment }: { isOwnerComment: boolean }) => {
    return isOwnerComment ? (
        <div className={classes.commentInfo}>10 h</div>
    ) : (
        <div>
            <div className={classes.infoSubtitle}>0 h</div>
            <div className={classes.infoSubtitle}>like</div>
            <div className={classes.infoSubtitle}>Reply</div>
        </div>
    );
};

export default CommentInfo;
