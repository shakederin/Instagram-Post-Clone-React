import Icon from '../icon/Icon';
import Username from '../username/Username';
import ProfilePicture from '../profilePicture/ProfilePicture';
import type { User } from '../../types';

interface IPostHeader {
    owner: User;
}

const PostHeader = ({ owner: { userName, profilePicture } }: IPostHeader) => (
    <div>
        <div>
            <ProfilePicture src={profilePicture} />
            <Username userName={userName} header={true} />
        </div>
        <Icon className={''} img={'ellipsis'} />
    </div>
);

export default PostHeader;
