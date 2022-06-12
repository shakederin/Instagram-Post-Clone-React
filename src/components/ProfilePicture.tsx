interface ProfilePicture {
    src: string;
    className: string;
}
const ProfilePicture = (props: ProfilePicture) => {
    return <img src={props.src} className={props.className} />;
};

export default ProfilePicture;
