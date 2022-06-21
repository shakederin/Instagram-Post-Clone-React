import { classes as generalClasses } from '../../style/general.st.css';
import { st, classes } from './LikedByContainer.st.css';
import {
    SAMPLE1_LIKED_BY_PROFILE_PICTURE,
    SAMPLE2_LIKED_BY_PROFILE_PICTURE,
} from '../../constants';

interface ILikedByContainer {
    allPeopleWhoLiked: IPeopleWhoLiked[];
}

interface IPeopleWhoLiked {
    // move to types
    userName: string;
    profilePicture: string;
}

const LikedByContainer = ({ allPeopleWhoLiked }: ILikedByContainer) => (
    <div className={classes.allLikes}>
        <div className={classes.likeByWho}>
            <div className={classes.UserLikeByPic}>
                <img
                    className={st(
                        classes.likeProfilePicture,
                        classes.otherUserLikeByPic,
                        generalClasses.profilePicture
                    )}
                    src={SAMPLE1_LIKED_BY_PROFILE_PICTURE}
                    alt="profile Picture"
                ></img>
                <img
                    className={st(classes.likeProfilePicture, generalClasses.profilePicture)}
                    src={SAMPLE2_LIKED_BY_PROFILE_PICTURE}
                    alt="profile Picture"
                    id="lastUserLikeByPic"
                ></img>
            </div>
            <div className={classes.likeContentContainer}>
                <span>Liked by</span>
                <span className={st(generalClasses.boldText, generalClasses.text)}>
                    {allPeopleWhoLiked.length > 1 ? (
                        <>
                            {allPeopleWhoLiked[0].userName}
                            <span className={generalClasses.text}>and</span>
                            <span className={st(generalClasses.boldText, generalClasses.text)}>
                                {allPeopleWhoLiked.length - 1} others
                            </span>
                        </>
                    ) : (
                        'yonni'
                    )}
                </span>
            </div>
        </div>
        <div className={classes.hoursAgo}>18 HOURS AGO</div>
    </div>
);

export default LikedByContainer;
