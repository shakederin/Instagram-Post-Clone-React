interface commentInfo {
    className: string;
    isDescription: boolean;
}
const CommentInfo = (props: commentInfo) => {
    return props.isDescription ? (
        <div className={props.className}>10 h</div>
    ) : (
        <div>
            <div className={props.className}>0 h</div>
            <div className={props.className}>like</div>
            <div className={props.className}>Reply</div>
        </div>
    );
};

export default CommentInfo;
