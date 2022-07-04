import Comment from '../comment/Comment';
import { classes } from './CommentsList.st.css';
import type { Comment as IComment, AddLikeToComment } from '../../types';

interface ICommentListProps {
    comments: IComment[];
    addLikeToComment: AddLikeToComment;
}

const CommentsList = ({ comments, addLikeToComment }: ICommentListProps) => (
    <ul className={classes.root}>
        {comments.map(({ user, creationDate, content, LikedBy, id }) => (
            <Comment
                user={user}
                creationDate={creationDate}
                content={content}
                LikedBy={LikedBy}
                addLikeToComment={addLikeToComment}
                key={id}
                id={id}
            />
        ))}
    </ul>
);

export default CommentsList;
