import { st, classes } from './LikedByContainer.st.css';
import { classes as generalClasses } from '../../style/general.st.css';
import type { User } from '../../types';
import { PROFILE_PICTURE_ALT } from '../../constants';
import { SAMPLE_PROFILE_PICTURES } from '../../mock-data';

export const renderPhotos = (allUsers: User[]) => {
    return (
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
    );
};
