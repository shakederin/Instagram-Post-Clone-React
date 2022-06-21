import ImageContainer from '../imageContainer/ImageContainer';
import PostLayout from '../postLayout/PostLayout';
import { classes } from './InstagramPost.st.css';

// interface User {
//     userName: string;
//     description: string;
//     profilePicture: string;
// }
// interface IPost {
//     user: User;
//     imgUrl: string;
// }
interface IInstagramPost {
    userName: string;
    description: string;
    profilePicture: string;
    imgUrl: string;
    creationDate: Date;
}

// const InstagramPost = ({ user: { userName, description, profilePicture }, imgUrl }: IPost) => (
const InstagramPost = ({
    userName,
    description,
    profilePicture,
    imgUrl,
    creationDate,
}: IInstagramPost) => (
    <div className={classes.mainContainer}>
        <ImageContainer imgUrl={imgUrl} />
        <PostLayout
            profilePicture={profilePicture}
            userName={userName}
            description={description}
            creationDate={creationDate}
        />
    </div>
);

export default InstagramPost;
