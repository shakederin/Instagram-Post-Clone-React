import { classes as generalClasses } from '../../style/general.st.css';

interface IProfilePicture {
    src: string;
}
const ProfilePicture = ({ src }: IProfilePicture) => (
    <div className={generalClasses.profilePictureContainer}>
        <img className={generalClasses.profilePicture} src={src} />
    </div>
);

export default ProfilePicture;
