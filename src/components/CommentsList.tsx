import Comment from './Comment';
import { classes } from '../style/comments.st.css';
interface postOwner {
    name: string;
    profilePicture: string;
}

const CommentsList = (props: postOwner) => {
    return (
        <div id="commentsBlock">
            <ul className={classes.commentsList}>
                <Comment
                    description={true}
                    ProfilePicture={props.profilePicture}
                    userName={props.name}
                    content={'me, at the sunrise'}
                />
            </ul>
        </div>
    );
};

export default CommentsList;
