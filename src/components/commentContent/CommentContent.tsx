import { classes as generalClasses } from '../../style/general.st.css';

export interface ICommentContent {
    content: string;
}
export const CommentContent = ({ content }: ICommentContent) => (
    <span className={generalClasses.text}>{content}</span>
);
