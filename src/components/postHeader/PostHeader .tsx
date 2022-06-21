import Icon from '../icon/Icon';
import Username from '../username/Username';
import ProfilePicture from '../profilePicture/ProfilePicture';
import ellipsis from '../../assets/ellipsis.svg';
import { classes } from './PostHeader.st.css';

interface IPostOwner {
    userName: string;
    profilePicture: string;
}

const PostHeader = ({ userName, profilePicture }: IPostOwner) => (
    <div className={classes.header}>
        <div className={classes.profilePictureHeaderBlock}>
            <ProfilePicture src={profilePicture} />
            <Username userName={userName} header={true} />
        </div>
        <Icon className={classes.ellipsis} img={ellipsis} />
    </div>
);

export default PostHeader;
