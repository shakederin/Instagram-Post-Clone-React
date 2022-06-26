import { nanoid } from 'nanoid';
import Comment from '../comment/Comment';
import { classes } from './CommentsList.st.css';
import type { Comment as IComment } from '../../types';

interface ICommentListProps {
    comments: IComment[];
    likeComment: (date: number, userName: string) => void;
}

const CommentsList = ({ comments, likeComment }: ICommentListProps) => (
    <ul className={classes.root}>
        {comments.map(({ user: { userName, profilePicture }, creationDate, content, LikedBy }) => (
            <Comment
                user={{ userName, profilePicture }}
                creationDate={creationDate}
                content={content}
                LikedBy={LikedBy}
                likeComment={likeComment}
                key={nanoid()}
            />
        ))}
    </ul>
);

export default CommentsList;
