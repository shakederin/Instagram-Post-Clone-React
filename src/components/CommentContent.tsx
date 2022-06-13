interface content {
    content: string;
    className: string;
}
const CommentContent = ({ content, className }: content) => (
    <span className={className}>{content}</span>
);

export default CommentContent;
