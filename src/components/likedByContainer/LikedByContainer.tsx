import {
    SAMPLE1_LIKED_BY_PROFILE_PICTURE,
    SAMPLE2_LIKED_BY_PROFILE_PICTURE,
} from '../../constants';
import type { User } from '../../types';

interface ILikedByContainer {
    allUsersWhoLiked: User[];
}

const LikedByContainer = ({ allUsersWhoLiked }: ILikedByContainer) => (
    <div>
        <div>
            <div>
                <img src={SAMPLE1_LIKED_BY_PROFILE_PICTURE} alt="profile Picture"></img>
                <img
                    src={SAMPLE2_LIKED_BY_PROFILE_PICTURE}
                    alt="profile Picture"
                    id="lastUserLikeByPic"
                ></img>
            </div>
            <div>
                <span>Liked by</span>
                <span>
                    {allUsersWhoLiked.length > 1 ? (
                        <>
                            {allUsersWhoLiked[0].userName}
                            <span>and</span>
                            <span>{allUsersWhoLiked.length - 1} others</span>
                        </>
                    ) : (
                        'yonni'
                    )}
                </span>
            </div>
        </div>
        <div>18 HOURS AGO</div>
    </div>
);

export default LikedByContainer;
