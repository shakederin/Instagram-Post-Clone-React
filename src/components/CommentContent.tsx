interface content {
    content: string;
    className: string;
}
const CommentContent = ({ content, className }: content) => {
    return <span className={className}>{content}</span>;
};

export default CommentContent;
