import { MOCK_DATA } from '../../mock-data';
import { AND, LIKED_BY, OTHER, OTHERS } from '../../constants';
import { st, classes } from './LikedByContainer.st.css';
import { classes as generalClasses } from '../../style/general.st.css';
import type { IinitialState } from '../../types';
import { renderPhotos } from './helpers';

const { SAMPLE_HOURS_AGO } = MOCK_DATA;
interface ILikedByContainer {
    allUsersWhoLiked: IinitialState;
}

const LikedByContainer = ({ allUsersWhoLiked }: ILikedByContainer) => {
    const allUsers = Object.values(allUsersWhoLiked);
    return (
        <div className={classes.root}>
            <div className={classes.likeByWho}>
                {renderPhotos(allUsers)}
                <div className={classes.likeContentContainer}>
                    <span>{LIKED_BY}</span>
                    <span className={st(generalClasses.boldText, generalClasses.text)}>
                        {allUsers.length > 1 ? (
                            <>
                                {allUsers[1].userName}
                                <span className={generalClasses.text}>{AND}</span>
                                <>
                                    <span
                                        className={st(generalClasses.boldText, generalClasses.text)}
                                    >
                                        {allUsers.length - 1}{' '}
                                        {allUsers.length === 2 ? OTHER : OTHERS}
                                    </span>
                                </>
                            </>
                        ) : (
                            MOCK_DATA.SAMPLE_NAME
                        )}
                    </span>
                </div>
            </div>
            <div className={classes.hoursAgo}>{SAMPLE_HOURS_AGO}</div>
        </div>
    );
};

export default LikedByContainer;
