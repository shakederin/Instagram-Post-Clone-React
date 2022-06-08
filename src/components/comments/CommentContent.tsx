interface content {
    content: string;
    className: string;
}
const CommentContent = (props: content) => {
    return <span className={props.className}>{props.content}</span>;
};

export default CommentContent;
