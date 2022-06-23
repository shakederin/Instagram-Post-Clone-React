import Icon from '../icon/Icon';
import heart from '../../assets/heart.svg';
import redHeart from '../../assets/red-heart.svg';
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
