import UserName from '../username/Username';
import ProfilePicture from '../profilePicture/ProfilePicture';
import { MOCK_DATA } from '../../mockData';
import { classes } from './PostDescription.st.css';
import { classes as generalClasses } from '../../style/general.st.css';
import type { PostData, User } from '../../types';

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
            <div className={classes.postTitle}>
                <ProfilePicture src={profilePicture} />
                <div className={classes.commentText}>
                    <div>
                        <UserName userName={userName} header={false} />
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
