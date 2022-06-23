import { FOLLOWING } from '../../constants';
import { classes as generalClasses } from '../../style/general.st.css';
import { classes } from './UserName.st.css';

interface IUsername {
    userName: string;
    header: boolean;
}
const Username = ({ userName, header }: IUsername) => (
    <>
        {header ? (
            <span className={classes.commentsHeader}>
                <span className={generalClasses.boldText}>
                    {userName} &#8226; {FOLLOWING}
                </span>
            </span>
        ) : (
            <span className={generalClasses.boldText}>{userName}</span>
        )}
    </>
);

export default Username;
