import { st, classes } from '../../style/reply.st.css';
import { classes as commentClassesNames } from '../../style/comments.st.css';
import { classes as mainClassesNames } from '../../style/main.st.css';
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
                        commentClassesNames.profilePicture
                    )}
                    src={SAMPLE1_LIKED_BY_PROFILE_PICTURE}
                    alt="profile Picture"
                ></img>
                <img
                    className={st(classes.likeProfilePicture, commentClassesNames.profilePicture)}
                    src={SAMPLE2_LIKED_BY_PROFILE_PICTURE}
                    alt="profile Picture"
                    id="lastUserLikeByPic"
                ></img>
            </div>
            <div className={classes.likeContentContainer}>
                <span>Liked by</span>
                <span className={st(mainClassesNames.boldText, commentClassesNames.text)}>
                    {allPeopleWhoLiked.length > 1 ? (
                        <>
                            {allPeopleWhoLiked[0].userName}
                            <span className={commentClassesNames.text}>and</span>
                            <span
                                className={st(mainClassesNames.boldText, commentClassesNames.text)}
                            >
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
