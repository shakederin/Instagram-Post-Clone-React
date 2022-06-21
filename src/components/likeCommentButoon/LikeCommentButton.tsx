import heart from '../../assets/heart.svg';
import redHeart from '../../assets/red-heart.svg';
import Icon from '../icon/Icon';
interface ILikeCommentButton {
    likeComment: () => void;
}
const LikeCommentButton = ({ likeComment }: ILikeCommentButton) => {
    return (
        <div>
            <Icon img={heart} className={''} />;
        </div>
    );
};

export default LikeCommentButton;
