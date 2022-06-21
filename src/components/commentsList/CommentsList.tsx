import type { Comment as IComment } from '../../types';
import Comment from '../comment/Comment';

interface ICommentListProps {
    comments: IComment[];
    likeComment: () => void;
}

const CommentsList = ({ comments, likeComment }: ICommentListProps) => (
    <ul>
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
