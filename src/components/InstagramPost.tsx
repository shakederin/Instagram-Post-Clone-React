import ImageContainer from './ImageContainer';
import PostLayout from './PostLayout';
import { classes } from '../style/main.st.css';

interface IPost {
    img: string;
    userName: string;
    description: string;
    profilePicture: string;
}

const InstagramPost = ({ img, userName, description, profilePicture }: IPost) => (
    <div className={classes.mainContainer}>
        <ImageContainer imgUrl={img} />
        <PostLayout profilePicture={profilePicture} userName={userName} description={description} />
    </div>
);

export default InstagramPost;
