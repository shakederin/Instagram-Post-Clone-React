import { classes as generalClasses } from '../../style/general.st.css';

interface IProfilePicture {
    src: string;
}
const ProfilePicture = ({ src }: IProfilePicture) => (
    <img className={generalClasses.profilePicture} src={src} />
);

export default ProfilePicture;