import ProfilePicture from '../profilePicture/ProfilePicture';
import Username from '../username/Username';
import { classes } from '../../style/comments.st.css';

interface IPostDescription {
    profilePicture: string;
    userName: string;
    description: string;
    creationDate: Date;
}
const PostDescription = ({ profilePicture, userName, description }: IPostDescription) => {
    return (
        <div className={classes.description}>
            <div className={classes.postTitle}>
                <ProfilePicture src={profilePicture} />
                <div className={classes.commentText}>
                    <div>
                        <Username userName={userName} header={false} />
                        <span className={classes.text}>{description}</span>
                    </div>
                    <div className={classes.commentInfo}>10 h</div>
                </div>
            </div>
        </div>
    );
};

export default PostDescription;
