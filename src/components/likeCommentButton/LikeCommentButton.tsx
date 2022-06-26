import Icon from '../icon/Icon';
import heart from '../../assets/heart.svg';
import redHeart from '../../assets/red-heart.svg';
import { classes } from './LikeCommentButton.st.css';

interface ILikeCommentButton {
    userName: string;
    creationDate: number;
    LikedBy: string[];
    likeComment: (date: number, userName: string) => void;
}
const LikeCommentButton = ({
    userName,
    creationDate,
    LikedBy,
    likeComment,
}: ILikeCommentButton) => {
    return (
        <div
            className={classes.root}
            onClick={() => {
                likeComment(creationDate, userName);
            }}
        >
            {LikedBy.length ? (
                <Icon img={redHeart} className={classes.likeCommentButton} />
            ) : (
                <Icon img={heart} className={classes.likeCommentButton} />
            )}
        </div>
    );
};

export default LikeCommentButton;
