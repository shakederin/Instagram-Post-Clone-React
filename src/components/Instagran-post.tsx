import CommentsContainer from './comments/CommentsContainer';
import ImageContainer from './image/ImageContainer';
import { classes } from './style/main.st.css';
const pp = 'https://cdn.pixabay.com/photo/2021/05/20/11/58/beauty-6268460_1280.jpg';

const InstagramPost = () => {
    return (
        <div className={classes.mainContainer}>
            <ImageContainer />
            <CommentsContainer
                profilePicture={pp}
                userName="tonytoscani"
                postDescription='"The Tuthor" Oil on Linen 36" x 28"'
            />
        </div>
    );
};

export default InstagramPost;
