import Comment from '../comment/Comment';
import { classes } from './CommentsList.st.css';
import type { Comment as IComment, LikeComment } from '../../types';

interface ICommentListProps {
    comments: IComment[];
    likeComment: LikeComment;
}

const CommentsList = ({ comments, likeComment }: ICommentListProps) => (
    <ul className={classes.root}>
        {comments.map(
            ({ user: { userName, profilePicture }, creationDate, content, LikedBy, id }) => (
                <Comment
                    user={{ userName, profilePicture }}
                    creationDate={creationDate}
                    content={content}
                    LikedBy={LikedBy}
                    likeComment={likeComment}
                    key={Math.random().toString(16).slice(2)}
                    id={id}
                />
            )
        )}
    </ul>
);

export default CommentsList;
