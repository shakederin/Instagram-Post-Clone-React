import { useState } from 'react';
import PostHeader from '../postHeader/PostHeader ';
import CommentsList from '../commentsList/CommentsList';
import PostDescription from '../postDescription/PostDescription';
import PostReactionContainer from '../postReactionContainer/PostReactionContainer';
import { classes } from './PostLayout.st.css';
import type { PostData, User, Comment } from '../../types';

interface IPostLayoutProps {
    owner: User;
    postData: PostData;
}

const PostLayout = ({ owner, postData }: IPostLayoutProps) => {
    const [comments, setComments] = useState<Comment[]>([]);

    const addComment = (comment: Comment) => {
        setComments((precomments) => [...precomments, comment]);
    };
    const likeComment = (date: number, userName: string) => {
        const newState = [...comments];
        for (const comment of newState) {
            if (comment.creationDate === date) {
                const indexOfUserName = comment.LikedBy.indexOf(userName);
                indexOfUserName === -1
                    ? comment.LikedBy.push(userName)
                    : comment.LikedBy.splice(indexOfUserName, 1);
            }
        }
        setComments(newState);
    };

    return (
        <div className={classes.root}>
            <PostHeader owner={owner} />
            <PostDescription owner={owner} postData={postData} />
            <CommentsList comments={comments} likeComment={likeComment} />
            <PostReactionContainer onCommentSubmit={addComment} likeComment={likeComment} />
        </div>
    );
};

export default PostLayout;
