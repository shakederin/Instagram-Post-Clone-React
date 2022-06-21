import Comment from '../comment/Comment';
import { classes } from './CommentsList.st.css';
import type { Comment as IComment } from '../../types';
import { useState } from 'react';

interface ICommentListProps {
    comments: IComment[];
}

const CommentsList = ({ comments }: ICommentListProps) => (
    <ul className={classes.commentsList}>
        {comments.map(({ user: { userName, profilePicture }, content }) => (
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
