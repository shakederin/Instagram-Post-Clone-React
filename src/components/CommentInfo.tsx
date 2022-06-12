interface commentInfo {
    className: string;
    isDescription: boolean;
}
const CommentInfo = ({ className, isDescription }: commentInfo) => {
    return isDescription ? (
        <div className={className}>10 h</div>
    ) : (
        <div>
            <div className={className}>0 h</div>
            <div className={className}>like</div>
            <div className={className}>Reply</div>
        </div>
    );
};

export default CommentInfo;
