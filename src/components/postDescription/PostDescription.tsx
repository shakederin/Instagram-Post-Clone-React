import ProfilePicture from '../profilePicture/ProfilePicture';
import Username from '../username/Username';
import { classes as generalClasses } from '../../style/general.st.css';
import type { PostData, User } from '../../types';
import { classes } from './PostDescription.st.css';

interface IPostDescription {
    owner: User;
    postData: PostData;
}
const PostDescription = ({
    owner: { userName, profilePicture },
    postData: { creationDate, description },
}: IPostDescription) => {
    return (
        <div className={classes.root}>
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
