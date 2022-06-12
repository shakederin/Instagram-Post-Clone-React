import CommentsContainer from './CommentsContainer';
import ImageContainer from './ImageContainer';
import { classes } from '../style/main.st.css';
import { PROPILE_PICTURE } from '../constants';

const InstagramPost = () => {
    return (
        <div className={classes.mainContainer}>
            <ImageContainer />
            <CommentsContainer
                profilePicture={PROPILE_PICTURE}
                userName="tonytoscani"
                postDescription='"The Tuthor" Oil on Linen 36" x 28"'
            />
        </div>
    );
};

export default InstagramPost;
