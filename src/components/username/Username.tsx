import { classes } from './UserName.st.css';
import { classes as generalClasses } from '../../style/general.st.css';

interface IUsername {
    userName: string;
    header: boolean;
}
const Username = ({ userName, header }: IUsername) => (
    <>
        {header ? (
            <span className={classes.commentsHeader}>
                <span className={generalClasses.boldText}>{userName} &#8226; Following</span>
            </span>
        ) : (
            <span className={generalClasses.boldText}>{userName}</span>
        )}
    </>
);

export default Username;
