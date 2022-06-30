import { MOCK_DATA } from '../../mockData';
import { AND, LIKED_BY, OTHER, OTHERS, PROFILE_PICTURE_ALT } from '../../constants';
import { st, classes } from './LikedByContainer.st.css';
import { classes as generalClasses } from '../../style/general.st.css';
import type { User } from '../../types';

const { SAMPLE_HOURS_AGO } = MOCK_DATA;
interface ILikedByContainer {
    allUsersWhoLiked: User[];
}

const LikedByContainer = ({ allUsersWhoLiked }: ILikedByContainer) => (
    <div className={classes.root}>
        <div className={classes.likeByWho}>
            <div className={classes.UserLikeByPic}>
                {allUsersWhoLiked.map((user, index) => {
                    return index > 2 || index === 0 ? (
                        <div key={Math.random().toString(16).slice(2)}></div>
                    ) : (
                        <img
                            className={st(
                                classes.likeProfilePicture,
                                classes.otherUserLikeByPic,
                                generalClasses.profilePicture
                            )}
                            src={user.profilePicture}
                            alt={PROFILE_PICTURE_ALT}
                            key={Math.random().toString(16).slice(2)}
                        ></img>
                    );
                })}
                <img
                    className={st(classes.likeProfilePicture, generalClasses.profilePicture)}
                    src={allUsersWhoLiked[0].profilePicture}
                    alt={PROFILE_PICTURE_ALT}
                ></img>
            </div>
            <div className={classes.likeContentContainer}>
                <span>{LIKED_BY}</span>
                <span className={st(generalClasses.boldText, generalClasses.text)}>
                    {allUsersWhoLiked.length === 2 ? (
                        <>
                            {allUsersWhoLiked[1].userName}
                            <span className={generalClasses.text}>{AND}</span>
                            <span className={st(generalClasses.boldText, generalClasses.text)}>
                                {allUsersWhoLiked.length - 1} {OTHER}
                            </span>
                        </>
                    ) : allUsersWhoLiked.length > 2 ? (
                        <>
                            {allUsersWhoLiked[1].userName}
                            <span className={generalClasses.text}>{AND}</span>
                            <span className={st(generalClasses.boldText, generalClasses.text)}>
                                {allUsersWhoLiked.length - 1} {OTHERS}
                            </span>
                        </>
                    ) : (
                        allUsersWhoLiked[0].userName
                    )}
                </span>
            </div>
        </div>
        <div className={classes.hoursAgo}>{SAMPLE_HOURS_AGO}</div>
    </div>
);

export default LikedByContainer;
