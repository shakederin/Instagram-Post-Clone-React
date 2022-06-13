interface IProfilePicture {
    src: string;
    className: string;
}
const ProfilePicture = ({ src, className }: IProfilePicture) => (
    <img src={src} className={className} />
);

export default ProfilePicture;
