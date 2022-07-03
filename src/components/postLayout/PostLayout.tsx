import { useCallback, useState } from 'react';
import PostHeader from '../postHeader/PostHeader ';
import CommentsList from '../commentsList/CommentsList';
import PostDescription from '../postDescription/PostDescription';
import PostReactionContainer from '../postReactionContainer/PostReactionContainer';
import { classes } from './PostLayout.st.css';
import type { PostData, User, Comment } from '../../types';
import { getRandomUser } from '../../utils/getRandomUser';

interface IPostLayoutProps {
    owner: User;
    postData: PostData;
}

const PostLayout = ({ owner, postData }: IPostLayoutProps) => {
    const [comments, setComments] = useState<Comment[]>([]);

    const addComment = useCallback((comment: string) => {
        const randomUser = getRandomUser();
        const newComment = {
            user: randomUser,
            content: comment,
            creationDate: Date.now(),
            LikedBy: [],
            likeComment,
            id: Math.random().toString(16).slice(2),
        };
        setComments((precomments) => [...precomments, newComment]);
    }, []);

    const likeComment = useCallback(
        (id: string) => {
            const newState = [...comments];
            for (const comment of newState) {
                if (comment.id === id) {
                    const indexOfUserName = comment.LikedBy.indexOf(owner.userName);
                    indexOfUserName === -1
                        ? comment.LikedBy.push(owner.userName)
                        : comment.LikedBy.splice(indexOfUserName, 1);
                }
            }
            setComments(newState);
        },
        [comments.length]
    );

    return (
        <div className={classes.root}>
            <PostHeader owner={owner} />
            <PostDescription owner={owner} postData={postData} />
            <CommentsList comments={comments} likeComment={likeComment} />
            <PostReactionContainer onCommentSubmit={addComment} />
        </div>
    );
};

export default PostLayout;
