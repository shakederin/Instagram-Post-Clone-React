import Comment from './Comment';
import { classes } from '../style/comments.st.css';
interface IPostOwner {
    name: string;
    profilePicture: string;
    description: string;
}

const CommentsList = ({ name, description, profilePicture }: IPostOwner) => (
    <div className={classes.commentsBlock}>
        <ul className={classes.commentsList}>
            <Comment
                description={true}
                profilePicture={profilePicture}
                userName={name}
                content={description}
            />
        </ul>
    </div>
);
export default CommentsList;
