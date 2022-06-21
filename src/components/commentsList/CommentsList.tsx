import Comment from '../comment/Comment';
import { classes } from './CommentsList.st.css';

type Comment = {
    userName: string;
    profilePicture: string;
    content: string;
};

interface ICommentListProps {
    comments: Comment[] | [];
}

const CommentsList = ({ comments }: ICommentListProps) => (
    <ul className={classes.commentsList}>
        {comments.map(({ userName, profilePicture, content }) => (
            <Comment
                isOwnerComment={true}
                profilePicture={profilePicture}
                userName={userName}
                content={content}
            />
        ))}
    </ul>
);
export default CommentsList;
