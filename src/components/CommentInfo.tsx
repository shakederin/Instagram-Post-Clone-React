interface commentInfo {
    className: string;
}
const CommentInfo = (props: commentInfo) => {
    return <div className={props.className}>CommentInfo</div>;
};

export default CommentInfo;
