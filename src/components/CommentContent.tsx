import { classes } from '../style/comments.st.css';

interface ICommentContent {
    content: string;
}
const CommentContent = ({ content }: ICommentContent) => (
    <span className={classes.text}>{content}</span>
);

export default CommentContent;
