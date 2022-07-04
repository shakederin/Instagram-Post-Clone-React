import { memo } from 'react';
import type { OnSubmit } from '../../types';
import InputForm from '../inputForm/InputForm';
import LikeContainer from '../likeContainer/LikeContainer';
import { classes } from './PostReactionContainer.st.css';

interface IPostReactionContainer {
    onCommentSubmit: OnSubmit;
}
const PostReactionContainer = ({ likeComment, onCommentSubmit }: IPostReactionContainer) => (
    <div className={classes.root}>
        <LikeContainer />
        <InputForm onSubmit={onCommentSubmit} likeComment={likeComment} />
    </div>
);

export default memo(PostReactionContainer);
