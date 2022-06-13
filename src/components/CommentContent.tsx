import { classes } from '../style/comments.st.css';

const CommentContent = ({ content }: { content: string }) => (
    <span className={classes.text}>{content}</span>
);

export default CommentContent;
