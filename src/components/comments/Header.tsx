import Icon from '../general/Icon';
import ProfilePicture from '../general/ProfilePicture';
import ellipsis from '../assets/ellipsis.svg';
import Username from '../general/Username';
import { classes } from '../style/comments.st.css';

interface postOwner {
    name: string;
    profilePicture: string;
}

const Header = (props: postOwner) => {
    return (
        <div className={classes.commentsContainerHeader}>
            <div className={classes.profilePictureHeaderBlock}>
                <ProfilePicture
                    src={props.profilePicture}
                    className={classes.profilePicture}
                    id=""
                />
                <Username id="commentsHeader" name={props.name} header={true} />
            </div>
            <Icon img={ellipsis} id="ellipsis" className="" />
        </div>
    );
};

export default Header;
