import Icon from '../icon/Icon';
import heart from '../../assets/heart.svg';
import redHeart from '../../assets/red-heart.svg';
import { classes } from './LikeCommentButton.st.css';
interface ILikeCommentButton {
    likeComment: () => void;
}
const LikeCommentButton = ({ likeComment }: ILikeCommentButton) => {
    return (
        <div className={classes.root}>
            <Icon img={heart} className={classes.likeCommentButton} />
        </div>
    );
};

export default LikeCommentButton;
