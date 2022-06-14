import { classes } from '../../style/comments.st.css';
interface IProfilePicture {
    src: string;
}
const ProfilePicture = ({ src }: IProfilePicture) => (
    <img className={classes.profilePicture} src={src} />
);

export default ProfilePicture;
