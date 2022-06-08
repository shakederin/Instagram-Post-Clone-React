import Comment from './Comment';

interface postOwner {
    name: string;
    profilePicture: string;
}

const CommentsList = (props: postOwner) => {
    return (
        <div id="commentsBlock">
            <ul id="commentsList">
                <Comment
                    description={true}
                    ProfilePicture={props.profilePicture}
                    userName={props.name}
                    content={'me, at the sunrise'}
                />
                --map--
            </ul>
        </div>
    );
};

export default CommentsList;
