import { st, classes } from '../style/reply.st.css';
import { classes as commentClassesNames } from '../style/comments.st.css';
import { classes as mainClassesNames } from '../style/main.st.css';
import { FIRST_LIKED_BY_PROFILE_PICTURE, SECOND_LIKED_BY_PROFILE_PICTURE } from '../constants';

const LikedByWho = () => (
    <div className={classes.allLikes}>
        <div className={classes.likeByWho}>
            <div className={classes.UserLikeByPic}>
                <img
                    src={FIRST_LIKED_BY_PROFILE_PICTURE}
                    alt="profile Picture"
                    className={st(classes.likeFP, commentClassesNames.profilePicture)}
                    id="otherUserLikeByPic"
                ></img>
                <img
                    src={SECOND_LIKED_BY_PROFILE_PICTURE}
                    alt="profile Picture"
                    className={st(classes.likeFP, commentClassesNames.profilePicture)}
                    id="lastUserLikeByPic"
                ></img>
            </div>
            <div className={classes.likeContentContainer}>
                <span>Liked by</span>
                <span className={st(mainClassesNames.boldText, commentClassesNames.text)}>
                    yonni
                </span>
                <span className={commentClassesNames.text}>and</span>
                <span className={st(mainClassesNames.boldText, commentClassesNames.text)}>
                    1,924 others
                </span>
            </div>
        </div>
        <div className={classes.hoursAgo}>18 HOURS AGO</div>
    </div>
);

export default LikedByWho;
