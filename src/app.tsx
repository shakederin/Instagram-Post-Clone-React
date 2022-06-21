import InstagramPost from './components/instagramPost/InstagramPost';
import { classes } from './style/general.st.css';
import {
    SAMPLE_POST_IMAGE,
    SAMPLE_PROFILE_PICTURE,
    SAMPLE_POST_DESCRIPTION,
    SAMPLE_USER_NAME,
    SAMPLE_DATE,
} from './constants';

export const App = () => (
    <main className={classes.root}>
        <InstagramPost
            imgUrl={SAMPLE_POST_IMAGE}
            userName={SAMPLE_USER_NAME}
            description={SAMPLE_POST_DESCRIPTION}
            profilePicture={SAMPLE_PROFILE_PICTURE}
            creationDate={SAMPLE_DATE}
        />
    </main>
);
