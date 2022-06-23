import Comment from '../comment/Comment';
import { classes } from './CommentsList.st.css';
import type { Comment as IComment } from '../../types';

interface ICommentListProps {
    comments: IComment[];
    likeComment: () => void;
}

const CommentsList = ({ comments, likeComment }: ICommentListProps) => (
    <ul className={classes.root}>
        {comments.map(
            ({ user: { userName, profilePicture }, creationDate, content, LikesCount }) => (
                <Comment
                    user={{ userName, profilePicture }}
                    creationDate={creationDate}
                    content={content}
                    LikesCount={LikesCount}
                    likeComment={likeComment}
                />
            )
        )}
    </ul>
);
export default CommentsList;
