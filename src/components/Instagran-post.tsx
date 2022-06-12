import CommentsContainer from './CommentsContainer';
import ImageContainer from './ImageContainer';
import { classes } from '../style/main.st.css';

interface Post {
    img: string;
    userName: string;
    postDescription: string;
    profilePicture: string;
}

const InstagramPost = ({ img, userName, postDescription, profilePicture }: Post) => {
    return (
        <div className={classes.mainContainer}>
            <ImageContainer imgUrl={img} />
            <CommentsContainer
                profilePicture={profilePicture}
                userName={userName}
                postDescription={postDescription}
            />
        </div>
    );
};

export default InstagramPost;
