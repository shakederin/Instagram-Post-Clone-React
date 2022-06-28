import { useState } from 'react';
import { PostHeader } from '../postHeader/PostHeader ';
import { CommentsList } from '../commentsList/CommentsList';
import { PostDescription } from '../postDescription/PostDescription';
import { PostReactionContainer } from '../postReactionContainer/PostReactionContainer';
import { classes } from './PostLayout.st.css';
import type { PostData, User, Comment } from '../../types';

export interface IPostLayoutProps {
    owner: User;
    postData: PostData;
}

export const PostLayout = ({ owner, postData }: IPostLayoutProps) => {
    const [comments, setComments] = useState<Comment[]>([]);
    const addComment = (value: string) => {};
    const likeComment = () => {};

    return (
        <div className={classes.root}>
            <PostHeader owner={owner} />
            <PostDescription owner={owner} postData={postData} />
            <CommentsList comments={comments} likeComment={likeComment} />
            <PostReactionContainer onCommentSubmit={addComment} />
        </div>
    );
};
