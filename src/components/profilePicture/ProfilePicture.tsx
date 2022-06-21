interface IProfilePicture {
    src: string;
}
const ProfilePicture = ({ src }: IProfilePicture) => <img src={src} />;

export default ProfilePicture;
