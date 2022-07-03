import UserName from '../username/Username';
import ProfilePicture from '../profilePicture/ProfilePicture';
import { classes } from './PostDescription.st.css';
import { classes as generalClasses } from '../../style/general.st.css';
import type { PostData, User } from '../../types';
import { memo } from 'react';
import { MOCK_DATA } from '../../mock-data';

interface IPostDescription {
    owner: User;
    postData: PostData;
}
const PostDescription = ({
    owner: { userName, profilePicture },
    postData: { description },
}: IPostDescription) => {
    return (
        <div className={classes.root}>
            <div className={classes.postTitle}>
                <ProfilePicture src={profilePicture} story={true} />
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

export default memo(PostDescription);
