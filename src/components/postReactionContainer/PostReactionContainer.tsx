import InputForm from '../inputForm/InputForm';
import LikeContainer from '../likeContainer/LikeContainer';
import { classes } from '../../style/reply.st.css';

const PostReactionContainer = () => (
    <div className={classes.replyArea}>
        <LikeContainer />
        <InputForm />
    </div>
);

export default PostReactionContainer;
