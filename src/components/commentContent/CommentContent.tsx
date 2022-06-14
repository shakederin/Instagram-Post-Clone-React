import { classes } from '../../style/general.st.css';

interface ICommentContent {
    content: string;
}
const CommentContent = ({ content }: ICommentContent) => (
    <span className={classes.text}>{content}</span>
);

export default CommentContent;
