import InstagramPost from './components/instagramPost/InstagramPost';
import { MOCK_DATA, POST_IMAGES, SAMPLE_PROFILE_PICTURES } from './mock-data';
import { classes } from './style/general.st.css';

const owner = {
    userName: MOCK_DATA.SAMPLE_USER_NAME,
    profilePicture: SAMPLE_PROFILE_PICTURES[0],
};
const postData = {
    description: MOCK_DATA.SAMPLE_POST_DESCRIPTION,
    creationDate: MOCK_DATA.SAMPLE_DATE,
};

export const App = () => (
    <main className={classes.root}>
        <InstagramPost owner={owner} imgUrls={POST_IMAGES} postData={postData} />
    </main>
);
