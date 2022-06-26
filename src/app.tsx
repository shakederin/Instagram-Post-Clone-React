import InstagramPost from './components/instagramPost/InstagramPost';
import { MOCK_DATA, POST_IMAGE_SAMPLES, SAMPLES_PROFILE_PICTURE } from './mockText';
import { classes } from './style/general.st.css';

const owner = {
    userName: MOCK_DATA.SAMPLE_USER_NAME,
    profilePicture: SAMPLES_PROFILE_PICTURE[0],
};
const postData = {
    description: MOCK_DATA.SAMPLE_POST_DESCRIPTION,
    creationDate: MOCK_DATA.SAMPLE_DATE,
};

export const App = () => (
    <main className={classes.root}>
        <InstagramPost
            owner={owner}
            imgUrls={[
                POST_IMAGE_SAMPLES[0],
                POST_IMAGE_SAMPLES[1],
                POST_IMAGE_SAMPLES[2],
                POST_IMAGE_SAMPLES[3],
            ]}
            postData={postData}
        />
    </main>
);
