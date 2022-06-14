import Comment from './Comment';
import { classes } from '../style/comments.st.css';

interface ICommentList {
    userName: string;
    profilePicture: string;
    description: string;
}

const CommentsList = ({ userName, description, profilePicture }: ICommentList) => (
    <div className={classes.commentsBlock}>
        <ul className={classes.commentsList}>
            <Comment
                isOwnerComment={true}
                profilePicture={profilePicture}
                userName={userName}
                content={description}
            />
        </ul>
    </div>
);
export default CommentsList;
