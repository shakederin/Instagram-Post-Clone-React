interface ProfilePicture {
    src: string;
    className: string;
    id: string;
}
const ProfilePicture = (props: ProfilePicture) => {
    return <img src={props.src} className={props.className} id={props.id} />;
};

export default ProfilePicture;
