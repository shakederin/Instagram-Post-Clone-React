import { classes } from './UserName.st.css';
import { classes as generalClasses } from '../../style/general.st.css';
import { FOLLOWING } from '../../constants';

interface IUserName {
    userName: string;
    header: boolean;
}
const UserName = ({ userName, header }: IUserName) => (
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

export default UserName;
