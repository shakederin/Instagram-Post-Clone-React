import InputForm from './InputForm';
import LikeContainer from './LikeContainer';
import { classes } from '../style/reply.st.css';

const PostReactionContainer = () => (
    <div className={classes.replyArea}>
        <LikeContainer />
        <InputForm />
    </div>
);

export default PostReactionContainer;
