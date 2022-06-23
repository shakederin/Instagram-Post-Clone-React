import type { Comment } from '../../types';
import InputForm from '../inputForm/InputForm';
import LikeContainer from '../likeContainer/LikeContainer';
import { classes } from './PostReactionContainer.st.css';

interface IPostReactionContainer {
    likeComment: (date: number, userName: string) => void;
    onCommentSubmit: (comment: Comment) => void;
}
const PostReactionContainer = ({ likeComment, onCommentSubmit }: IPostReactionContainer) => (
    <div className={classes.replyArea}>
        <LikeContainer />
        <InputForm onSubmit={onCommentSubmit} likeComment={likeComment} />
    </div>
);

export default PostReactionContainer;
