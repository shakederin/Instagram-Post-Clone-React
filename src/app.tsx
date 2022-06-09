import { st, classes } from './style/main.st.css';
import InstagramPost from './components/Instagran-post';

export const App = () => {
    return (
        <main className={st(classes.root)}>
            <InstagramPost />
        </main>
    );
};
