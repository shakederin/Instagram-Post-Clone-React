interface ICommentContent {
    content: string;
}
const CommentContent = ({ content }: ICommentContent) => <span>{content}</span>;

export default CommentContent;
