import { st, classes } from './style/main.st.css';
import InstagramPost from './components/Instagran-post';
import { MAIN_PICTURE, PROPILE_PICTURE, POST_DESCRIPTION, USER_NAME } from './constants';

export const App = () => {
    return (
        <main className={st(classes.root)}>
            <InstagramPost
                img={MAIN_PICTURE}
                userName={USER_NAME}
                postDescription={POST_DESCRIPTION}
                profilePicture={PROPILE_PICTURE}
            />
        </main>
    );
};
