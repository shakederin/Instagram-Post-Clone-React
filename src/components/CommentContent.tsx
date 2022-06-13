interface IContent {
    content: string;
    className: string;
}
const CommentContent = ({ content, className }: IContent) => (
    <span className={className}>{content}</span>
);

export default CommentContent;
