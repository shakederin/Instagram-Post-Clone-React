import { classes } from './CommentInfo.st.css';

interface ICommentInfo {
    creationDate: Date;
    likesCount: number;
}

const CommentInfo = ({ creationDate, likesCount }: ICommentInfo) => {
    return (
        <div className={classes.root}>
            <div className={classes.infoSubtitle}>{creationDate.toDateString()}</div>
            {likesCount > 0 ? (
                <div className={classes.infoSubtitle}>{likesCount} like</div>
            ) : (
                <div className={classes.infoSubtitle}>like</div>
            )}
            <div className={classes.infoSubtitle}>Reply</div>
        </div>
    );
};

export default CommentInfo;
