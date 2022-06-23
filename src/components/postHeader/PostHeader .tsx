import Icon from '../icon/Icon';
import Username from '../username/Username';
import ProfilePicture from '../profilePicture/ProfilePicture';
import ellipsis from '../../assets/ellipsis.svg';
import type { User } from '../../types';
import { classes } from './PostHeader.st.css';

interface IPostHeader {
    owner: User;
}

const PostHeader = ({ owner: { userName, profilePicture } }: IPostHeader) => (
    <div className={classes.root}>
        <div className={classes.profilePictureHeaderBlock}>
            <ProfilePicture src={profilePicture} />
            <Username userName={userName} header={true} />
        </div>
        <Icon className={classes.ellipsis} img={ellipsis} />
    </div>
);

export default PostHeader;
