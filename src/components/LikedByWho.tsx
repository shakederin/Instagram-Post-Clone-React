import { st, classes } from '../style/reply.st.css';
import { classes as commentClassesNames } from '../style/comments.st.css';
import { classes as mainClassesNames } from '../style/main.st.css';

const LikedByWho = () => {
    return (
        <div className={classes.allLikes}>
            <div className={classes.likeByWho}>
                <div className={classes.UserLikeByPic}>
                    <img
                        src="https://cdn.pixabay.com/photo/2021/06/04/10/28/portrait-6309448_960_720.jpg"
                        alt="profile Picture"
                        className={st(classes.likeFP, commentClassesNames.profilePicture)}
                        id="otherUserLikeByPic"
                    ></img>
                    <img
                        src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/80/posts/26761/image/27-MalePortraits.jpg"
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
};

export default LikedByWho;
