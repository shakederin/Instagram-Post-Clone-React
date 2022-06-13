import Icon from './Icon';
import Username from './Username';
import ProfilePicture from './ProfilePicture';
import ellipsis from '../assets/ellipsis.svg';
import { classes } from '../style/comments.st.css';

interface IPostOwner {
    name: string;
    profilePicture: string;
}

const Header = ({ name, profilePicture }: IPostOwner) => (
    <div className={classes.header}>
        <div className={classes.profilePictureHeaderBlock}>
            <ProfilePicture className={classes.profilePicture} src={profilePicture} />
            <Username id="commentsHeader" name={name} header={true} />
        </div>
        <Icon className={classes.ellipsis} img={ellipsis} />
    </div>
);

export default Header;
