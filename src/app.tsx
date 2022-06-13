import InstagramPost from './components/InstagramPost';
import { st, classes } from './style/main.st.css';
import { POST_IMAGE, PROFILE_PICTURE, POST_DESCRIPTION, USER_NAME } from './constants';

export const App = () => (
    <main className={st(classes.root)}>
        <InstagramPost
            img={POST_IMAGE}
            userName={USER_NAME}
            description={POST_DESCRIPTION}
            profilePicture={PROFILE_PICTURE}
        />
    </main>
);
