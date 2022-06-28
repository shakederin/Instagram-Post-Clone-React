import { InstagramPost } from './components/instagramPost/InstagramPost';
import { MOCK_DATA, SAMPLE_POST_IMAGE, SAMPLES_LIKED_BY_PROFILE_PICTURE } from './mockText';
import { classes } from './style/general.st.css';

const owner = {
    userName: MOCK_DATA.SAMPLE_USER_NAME,
    profilePicture: SAMPLES_LIKED_BY_PROFILE_PICTURE[0],
};
const postData = {
    description: MOCK_DATA.SAMPLE_POST_DESCRIPTION,
    creationDate: MOCK_DATA.SAMPLE_DATE,
};

export const App = () => (
    <main className={classes.root}>
        <InstagramPost owner={owner} imgUrls={[SAMPLE_POST_IMAGE]} postData={postData} />
    </main>
);
