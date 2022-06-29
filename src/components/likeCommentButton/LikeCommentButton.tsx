import Icon from '../icon/Icon';
import heart from '../../assets/heart.svg';
import redHeart from '../../assets/red-heart.svg';
import { classes } from './LikeCommentButton.st.css';
import type { LikeComment } from '../../types';

interface ILikeCommentButton {
    userName: string;
    id: string;
    LikedBy: string[];
    likeComment: LikeComment;
}
const LikeCommentButton = ({ userName, id, LikedBy, likeComment }: ILikeCommentButton) => {
    return (
        <div
            className={classes.root}
            onClick={() => {
                likeComment(id, userName);
            }}
        >
            <Icon
                img={LikedBy.indexOf(userName) !== -1 ? redHeart : heart}
                className={classes.likeCommentButton}
            />
        </div>
    );
};

export default LikeCommentButton;
