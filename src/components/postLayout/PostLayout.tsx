import { useState } from 'react';
import PostHeader from '../postHeader/PostHeader ';
import CommentsList from '../commentsList/CommentsList';
import PostReactionContainer from '../postReactionContainer/PostReactionContainer';
import PostDescription from '../postDescription/PostDescription';
import type { PostData, User, Comment } from '../../types';
import { classes } from './PostLayout.st.css';

interface IPostLayoutProps {
    owner: User;
    postData: PostData;
}

const PostLayout = ({ owner, postData }: IPostLayoutProps) => {
    const [comments, setComments] = useState<Comment[]>([]);
    console.log(comments);

    const addComment = (comment: Comment) => {
        setComments((precomments) => [...precomments, comment]);
    };
    const likeComment = (date: Date, userName: string) => {
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
        <div className={classes.postLayout}>
            <PostHeader owner={owner} />
            <PostDescription owner={owner} postData={postData} />
            <CommentsList comments={comments} likeComment={likeComment} />
            <PostReactionContainer onCommentSubmit={addComment} likeComment={likeComment} />
        </div>
    );
};

export default PostLayout;
