import Icon from './Icon';
import ProfilePicture from './ProfilePicture';
import ellipsis from '../assets/ellipsis.svg';
import Username from './Username';
import { classes } from '../style/comments.st.css';

interface postOwner {
    name: string;
    profilePicture: string;
}

const Header = ({ name, profilePicture }: postOwner) => (
    <div className={classes.commentsContainerHeader}>
        <div className={classes.profilePictureHeaderBlock}>
            <ProfilePicture src={profilePicture} className={classes.profilePicture} />
            <Username id="commentsHeader" name={name} header={true} />
        </div>
        <Icon img={ellipsis} className={classes.ellipsis} />
    </div>
);

export default Header;
