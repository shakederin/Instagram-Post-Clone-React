import InstagramPost from './components/instagramPost/InstagramPost';

import {
    SAMPLE_POST_IMAGE,
    SAMPLE_PROFILE_PICTURE,
    SAMPLE_POST_DESCRIPTION,
    SAMPLE_USER_NAME,
    SAMPLE_DATE,
} from './constants';

const owner = {
    userName: SAMPLE_USER_NAME,
    profilePicture: SAMPLE_PROFILE_PICTURE,
};
const postData = { description: SAMPLE_POST_DESCRIPTION, creationDate: SAMPLE_DATE };

export const App = () => (
    <main>
        <InstagramPost owner={owner} imgUrls={[SAMPLE_POST_IMAGE]} postData={postData} />
    </main>
);
