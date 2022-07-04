import { useState } from 'react';
import Icon from '../icon/Icon';
import heart from '../../assets/heart.svg';
import CommentIcon from './CommentIcon';
import SharePostIcon from './SharePostIcon';
import redHeart from '../../assets/red-heart.svg';
import saveIcon from '../../assets/save-icon.svg';
import { SAVE_ICON_ATL, YOU } from '../../constants';
import { classes } from './PostActionBar.st.css';
import { classes as generalClasses } from '../../style/general.st.css';
import type { User } from '../../types';
import { getRandomUser } from '../../utils/getRandomUser';

interface IPostActionBar {
    likePost: (user: User) => void;
}

const PostActionBar = ({ likePost }: IPostActionBar) => {
    const [isLiked, setIsLiked] = useState<boolean>(false);
    return (
        <div className={classes.root}>
            <div>
                <span
                    onClick={() => {
                        likePost({
                            userName: YOU,
                            profilePicture: getRandomUser().profilePicture,
                        });
                        setIsLiked(!isLiked);
                    }}
                >
                    <Icon img={isLiked ? redHeart : heart} className={generalClasses.svgImg} />
                </span>
                <CommentIcon />
                <SharePostIcon />
            </div>
            <img src={saveIcon} alt={SAVE_ICON_ATL} className={classes.saveSVG} />
        </div>
    );
};

export default PostActionBar;
