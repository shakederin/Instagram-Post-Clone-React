import InputForm from '../inputForm/InputForm';
import LikeContainer from '../likeContainer/LikeContainer';
import { classes } from './PostReactionContainer.st.css';

const PostReactionContainer = () => (
    <div className={classes.replyArea}>
        <LikeContainer />
        <InputForm />
    </div>
);

export default PostReactionContainer;
