import ProfilePicture from '../profilePicture/ProfilePicture';
import Username from '../username/Username';
import { classes as generalClasses } from '../../style/general.st.css';
import { classes } from './PostDescription.st.css';

interface IPostDescription {
    profilePicture: string;
    userName: string;
    description: string;
    creationDate: Date;
}
const PostDescription = ({ profilePicture, userName, description }: IPostDescription) => {
    return (
        <div className={classes.description}>
            <div className={generalClasses.postTitle}>
                <ProfilePicture src={profilePicture} />
                <div className={classes.commentText}>
                    <div>
                        <Username userName={userName} header={false} />
                        <span className={generalClasses.text}>{description}</span>
                    </div>
                    <div className={classes.commentInfo}>10 h</div>
                </div>
            </div>
        </div>
    );
};

export default PostDescription;
