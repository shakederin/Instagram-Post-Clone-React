import { classes } from './CommentInfo.st.css';

interface ICommentInfo {
    commentPostDate: Date;
    commentLikesCount: number;
}

const CommentInfo = ({ commentPostDate, commentLikesCount }: ICommentInfo) => {
    console.log(commentPostDate);
    return (
        <div>
            <div className={classes.infoSubtitle}>0 h</div>
            {commentLikesCount > 0 ? (
                <div className={classes.infoSubtitle}>{commentLikesCount} like</div>
            ) : (
                <div className={classes.infoSubtitle}>like</div>
            )}
            <div className={classes.infoSubtitle}>Reply</div>
        </div>
    );
};

export default CommentInfo;
