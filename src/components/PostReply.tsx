import { classes } from '../style/reply.st.css';
import InputForm from './InputForm';
import LikeContainer from './LikeContainer';

const PostReply = () => (
    <div className={classes.replyArea}>
        <LikeContainer />
        <InputForm />
    </div>
);

export default PostReply;
