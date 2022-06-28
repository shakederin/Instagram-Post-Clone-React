import { classes as generalClasses } from '../../style/general.st.css';

export interface IProfilePicture {
    src: string;
}
export const ProfilePicture = ({ src }: IProfilePicture) => (
    <div className={generalClasses.profilePictureContainer}>
        <img className={generalClasses.profilePicture} src={src} />
    </div>
);
