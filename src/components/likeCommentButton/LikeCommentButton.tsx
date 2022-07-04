import Icon from '../icon/Icon';
import heart from '../../assets/heart.svg';
import redHeart from '../../assets/red-heart.svg';
import { classes } from './LikeCommentButton.st.css';

interface ILikeCommentButton {
    isLiked: boolean;
    likeComment: () => void;
}
const LikeCommentButton = ({ isLiked, likeComment }: ILikeCommentButton) => {
    return (
        <div
            className={classes.root}
            onClick={() => {
                likeComment();
            }}
        >
            <Icon img={isLiked ? redHeart : heart} className={classes.likeCommentButton} />
        </div>
    );
};

export default LikeCommentButton;
