import { Icon } from '../icon/Icon';
import heart from '../../assets/heart.svg';
import redHeart from '../../assets/red-heart.svg';
import { classes } from './LikeCommentButton.st.css';

export interface ILikeCommentButton {
    likeComment: () => void;
}
export const LikeCommentButton = ({ likeComment }: ILikeCommentButton) => {
    return (
        <div className={classes.root}>
            <Icon img={heart} className={classes.likeCommentButton} />;
        </div>
    );
};

export default LikeCommentButton;
