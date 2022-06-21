interface ICommentInfo {
    creationDate: Date;
    likesCount: number;
}

const CommentInfo = ({ creationDate, likesCount }: ICommentInfo) => {
    return (
        <div>
            <div>{creationDate.toDateString()}</div>
            {likesCount > 0 ? <div>{likesCount} like</div> : <div>like</div>}
            <div>Reply</div>
        </div>
    );
};

export default CommentInfo;
