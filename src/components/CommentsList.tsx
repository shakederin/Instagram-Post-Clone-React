import Comment from './Comment';
import { classes } from '../style/comments.st.css';
interface postOwner {
    name: string;
    profilePicture: string;
    postDescription: string;
}

const CommentsList = ({ name, postDescription, profilePicture }: postOwner) => {
    return (
        <div className={classes.commentsBlock}>
            <ul className={classes.commentsList}>
                <Comment
                    description={true}
                    profilePicture={profilePicture}
                    userName={name}
                    content={postDescription}
                />
            </ul>
        </div>
    );
};

export default CommentsList;
