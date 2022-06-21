import { useState } from 'react';
import PostHeader from '../postHeader/PostHeader ';
import CommentsList from '../commentsList/CommentsList';
import PostReactionContainer from '../postReactionContainer/PostReactionContainer';
import PostDescription from '../postDescription/PostDescription';
import type { PostData, User, Comment } from '../../types';

interface IPostLayoutProps {
    owner: User;
    postData: PostData;
}

const PostLayout = ({ owner, postData }: IPostLayoutProps) => {
    const [comments, setComments] = useState<Comment[]>([]);
    const addComment = (value: string) => {};
    const likeComment = () => {};

    return (
        <div>
            <PostHeader owner={owner} />
            <PostDescription owner={owner} postData={postData} />
            <CommentsList comments={comments} likeComment={likeComment} />
            <PostReactionContainer onCommentSubmit={addComment} />
        </div>
    );
};

export default PostLayout;
