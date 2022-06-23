import { MOCK_DATA, SAMPLES_LIKED_BY_PROFILE_PICTURE } from '../../mockText';
import { AND, LIKED_BY, OTHER, PROFILE_PICTURE_ALT } from '../../constants';
import { st, classes } from './LikedByContainer.st.css';
import { classes as generalClasses } from '../../style/general.st.css';
import type { User } from '../../types';

interface ILikedByContainer {
    allUsersWhoLiked: User[];
}

const LikedByContainer = ({ allUsersWhoLiked }: ILikedByContainer) => (
    <div className={classes.allLikes}>
        <div className={classes.likeByWho}>
            <div className={classes.UserLikeByPic}>
                <img
                    className={st(
                        classes.likeProfilePicture,
                        classes.otherUserLikeByPic,
                        generalClasses.profilePicture
                    )}
                    src={SAMPLES_LIKED_BY_PROFILE_PICTURE[1]}
                    alt={PROFILE_PICTURE_ALT}
                ></img>
                <img
                    className={st(classes.likeProfilePicture, generalClasses.profilePicture)}
                    src={SAMPLES_LIKED_BY_PROFILE_PICTURE[2]}
                    alt={PROFILE_PICTURE_ALT}
                ></img>
            </div>
            <div className={classes.likeContentContainer}>
                <span>{LIKED_BY}</span>
                <span className={st(generalClasses.boldText, generalClasses.text)}>
                    {allUsersWhoLiked.length ? (
                        <>
                            {allUsersWhoLiked[0].userName}
                            <span className={generalClasses.text}>{AND}</span>
                            <span className={st(generalClasses.boldText, generalClasses.text)}>
                                {allUsersWhoLiked.length} {OTHER}
                            </span>
                        </>
                    ) : (
                        MOCK_DATA.SAMPLE_NAME
                    )}
                </span>
            </div>
        </div>
        <div className={classes.hoursAgo}>{MOCK_DATA.SAMPLE_HOURS_AGO}</div>
    </div>
);

export default LikedByContainer;
