import ProfilePicture from '../profilePicture/ProfilePicture';
import Username from '../username/Username';
import { classes as generalClasses } from '../../style/general.st.css';
import type { PostData, User } from '../../types';
import { classes } from './PostDescription.st.css';
import { MOCK_DATA } from '../../mockText';

interface IPostDescription {
    owner: User;
    postData: PostData;
}
const PostDescription = ({
    owner: { userName, profilePicture },
    postData: { creationDate, description },
}: IPostDescription) => {
    return (
        <div className={classes.description}>
            <div className={generalClasses.postTitle}>
                <ProfilePicture src={profilePicture} />
                <div className={classes.commentText}>
                    <div>
                        <Username userName={userName} header={false} />
                        <span className={generalClasses.text}>{description}</span>
                    </div>
                    <div className={classes.commentInfo}>
                        {MOCK_DATA.SAMPLE_TIME_PASSED_FROM_CREATION_DATE}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDescription;
