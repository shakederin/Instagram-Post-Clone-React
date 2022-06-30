import Comment from '../comment/Comment';
import { classes } from './CommentsList.st.css';
import type { Comment as IComment, LikeComment } from '../../types';

interface ICommentListProps {
    comments: IComment[];
    likeComment: LikeComment;
}

const CommentsList = ({ comments, likeComment }: ICommentListProps) => (
    <ul className={classes.root}>
        {comments.map(({ user, creationDate, content, LikedBy, id }) => (
            <Comment
                user={user}
                creationDate={creationDate}
                content={content}
                LikedBy={LikedBy}
                likeComment={likeComment}
                key={id}
                id={id}
            />
        ))}
    </ul>
);

export default CommentsList;
