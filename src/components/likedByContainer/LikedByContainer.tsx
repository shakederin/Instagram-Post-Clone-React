import { MOCK_DATA, SAMPLE_PROFILE_PICTURES } from '../../mockData';
import { AND, LIKED_BY, OTHER, OTHERS, PROFILE_PICTURE_ALT } from '../../constants';
import { st, classes } from './LikedByContainer.st.css';
import { classes as generalClasses } from '../../style/general.st.css';
import type { IinisialState, User } from '../../types';

const { SAMPLE_HOURS_AGO } = MOCK_DATA;
interface ILikedByContainer {
    allUsersWhoLiked: IinisialState;
}

const LikedByContainer = ({ allUsersWhoLiked }: ILikedByContainer) => {
    const allUsers = Object.values(allUsersWhoLiked);
    return (
        <div className={classes.root}>
            <div className={classes.likeByWho}>
                <div className={classes.UserLikeByPic}>
                    {allUsers.slice(1, 3).map((user) => {
                        return (
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
                        src={SAMPLE_PROFILE_PICTURES[1]}
                        alt={PROFILE_PICTURE_ALT}
                    ></img>
                </div>
                <div className={classes.likeContentContainer}>
                    <span>{LIKED_BY}</span>
                    <span className={st(generalClasses.boldText, generalClasses.text)}>
                        {allUsers.length > 1 ? (
                            <>
                                {allUsers[1].userName}
                                <span className={generalClasses.text}>{AND}</span>
                                {allUsers.length === 2 ? (
                                    <>
                                        <span
                                            className={st(
                                                generalClasses.boldText,
                                                generalClasses.text
                                            )}
                                        >
                                            {allUsers.length - 1} {OTHER}
                                        </span>
                                    </>
                                ) : allUsers.length > 2 ? (
                                    <>
                                        <span
                                            className={st(
                                                generalClasses.boldText,
                                                generalClasses.text
                                            )}
                                        >
                                            {allUsers.length - 1} {OTHERS}
                                        </span>
                                    </>
                                ) : (
                                    <></>
                                )}
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
