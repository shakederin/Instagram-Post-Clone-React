import { InputForm } from '../inputForm/InputForm';
import { LikeContainer } from '../likeContainer/LikeContainer';
import { classes } from './PostReactionContainer.st.css';

export interface IPostReactionContainer {
    onCommentSubmit: (content: string) => void;
}
export const PostReactionContainer = ({ onCommentSubmit }: IPostReactionContainer) => (
    <div className={classes.root}>
        <LikeContainer />
        <InputForm onSubmit={onCommentSubmit} />
    </div>
);
