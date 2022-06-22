import InstagramPost from './components/instagramPost/InstagramPost';
import { classes } from './style/general.st.css';
import {
    SAMPLE_POST_IMAGE,
    SAMPLE_PROFILE_PICTURE,
    SAMPLE_POST_DESCRIPTION,
    SAMPLE_USER_NAME,
    SAMPLE_DATE,
    SAMPLE_POST_IMAGE2,
    SAMPLE_POST_IMAGE3,
    SAMPLE_POST_IMAGE4,
} from './constants';

const owner = {
    userName: SAMPLE_USER_NAME,
    profilePicture: SAMPLE_PROFILE_PICTURE,
};
const postData = { description: SAMPLE_POST_DESCRIPTION, creationDate: SAMPLE_DATE };

export const App = () => (
    <main className={classes.root}>
        <InstagramPost
            owner={owner}
            imgUrls={[
                SAMPLE_POST_IMAGE,
                SAMPLE_POST_IMAGE2,
                SAMPLE_POST_IMAGE3,
                SAMPLE_POST_IMAGE4,
            ]}
            postData={postData}
        />
    </main>
);
