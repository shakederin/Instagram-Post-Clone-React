interface IProfilePicture {
    src: string;
    className: string;
}
const ProfilePicture = ({ src, className }: IProfilePicture) => (
    <img className={className} src={src} />
);

export default ProfilePicture;
