import { memo } from 'react';
import { classes as generalClasses } from '../../style/general.st.css';

interface ICommentContent {
    content: string;
}
const CommentContent = ({ content }: ICommentContent) => (
    <span className={generalClasses.text}>{content}</span>
);

export default memo(CommentContent);
