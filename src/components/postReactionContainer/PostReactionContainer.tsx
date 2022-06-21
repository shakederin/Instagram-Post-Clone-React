import InputForm from '../inputForm/InputForm';
import LikeContainer from '../likeContainer/LikeContainer';

interface IPostReactionContainer {
    onCommentSubmit: (content: string) => void;
}
const PostReactionContainer = ({ onCommentSubmit }: IPostReactionContainer) => (
    <div>
        <LikeContainer />
        <InputForm onSubmit={onCommentSubmit} />
    </div>
);

export default PostReactionContainer;
