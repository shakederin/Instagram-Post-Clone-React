interface ProfilePicture {
    src: string;
    className: string;
}
const ProfilePicture = ({ src, className }: ProfilePicture) => {
    return <img src={src} className={className} />;
};

export default ProfilePicture;
