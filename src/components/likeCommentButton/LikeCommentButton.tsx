import Icon from '../icon/Icon';
import heart from '../../assets/heart.svg';
import redHeart from '../../assets/red-heart.svg';
import { classes } from './LikeCommentButton.st.css';

interface ILikeCommentButton {
    isLiked: boolean;
    likeClicked: () => void;
}
const LikeCommentButton = ({ isLiked, likeClicked }: ILikeCommentButton) => {
    return (
        <div
            className={classes.root}
            onClick={() => {
                likeClicked();
            }}
        >
            <Icon img={isLiked ? redHeart : heart} className={classes.likeCommentButton} />
        </div>
    );
};

export default LikeCommentButton;
