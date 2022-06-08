import type React from 'react';
import { st, classes } from './components/style/main.st.css';
import InstagramPost from './components/Instagran-post';

export interface AppProps {
    className?: string;
}

export const App: React.FC<AppProps> = ({ className }) => {
    return (
        <main className={st(classes.root, className)}>
            <InstagramPost />
        </main>
    );
};
