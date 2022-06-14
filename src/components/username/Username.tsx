import { classes as commentClasses } from '../../style/comments.st.css';
import { classes } from '../../style/main.st.css';

interface IUsername {
    userName: string;
    header: boolean;
}
const Username = ({ userName, header }: IUsername) => (
    <>
        {header ? (
            <span className={commentClasses.commentsHeader}>
                <span className={classes.boldText}>{userName} &#8226; Following</span>
            </span>
        ) : (
            <span className={classes.boldText}>{userName}</span>
        )}
    </>
);

export default Username;
