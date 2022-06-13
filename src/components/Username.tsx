import { classes as commentClasses } from '../style/comments.st.css';
import { classes } from '../style/main.st.css';

interface IUsername {
    name: string;
    header: boolean;
}
const Username = ({ name, header }: IUsername) => (
    <>
        {header ? (
            <span className={commentClasses.commentsHeader}>
                <span className={classes.boldText}>{name} &#8226; Following</span>
            </span>
        ) : (
            <span className={classes.boldText}>{name}</span>
        )}
    </>
);

export default Username;
