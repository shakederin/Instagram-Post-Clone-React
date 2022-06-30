import { memo } from 'react';
import { classes as generalClasses } from '../../style/general.st.css';

interface IProfilePicture {
    src: string;
    story: boolean;
}
const ProfilePicture = ({ src, story }: IProfilePicture) =>
    story ? (
        <div className={generalClasses.profilePictureContainer}>
            <img className={generalClasses.profilePicture} src={src} />
        </div>
    ) : (
        <img className={generalClasses.profilePictureWithNoStory} src={src} />
    );

export default memo(ProfilePicture);
