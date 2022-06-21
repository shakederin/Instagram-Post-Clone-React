import ProfilePicture from '../profilePicture/ProfilePicture';
import Username from '../username/Username';
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
        <div>
            <div>
                <ProfilePicture src={profilePicture} />
                <div>
                    <div>
                        <Username userName={userName} header={false} />
                        <span>{description}</span>
                    </div>
                    <div>10 h</div>
                </div>
            </div>
        </div>
    );
};

export default PostDescription;
