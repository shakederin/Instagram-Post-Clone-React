import InputForm from '../inputForm/InputForm';
import LikeContainer from '../likeContainer/LikeContainer';
import { classes } from './PostReactionContainer.st.css';

interface IPostReactionContainer {
    onCommentSubmit: (content: string) => void;
}
const PostReactionContainer = ({ onCommentSubmit }: IPostReactionContainer) => (
    <div className={classes.root}>
        <LikeContainer />
        <InputForm onSubmit={onCommentSubmit} />
    </div>
);

export default PostReactionContainer;
