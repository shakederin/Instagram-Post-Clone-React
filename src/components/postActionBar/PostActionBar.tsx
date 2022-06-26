import { useState } from 'react';
import Icon from '../icon/Icon';
import heart from '../../assets/heart.svg';
import CommentIcon from './CommentIcon';
import SharePostIcon from './SharePostIcon';
import redHeart from '../../assets/red-heart.svg';
import saveIcon from '../../assets/save-icon.svg';
import { SAVE_ICON_ATL } from '../../constants';
import { classes } from './PostActionBar.st.css';
import { classes as generalClasses } from '../../style/general.st.css';
import type { User } from '../../types';

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
                        likePost({ userName: 'you', profilePicture: '' });
                        setIsLiked(!isLiked);
                    }}
                >
                    {isLiked ? (
                        <Icon img={redHeart} className={generalClasses.svgImg} />
                    ) : (
                        <Icon img={heart} className={generalClasses.svgImg} />
                    )}
                </span>
                <CommentIcon />
                <SharePostIcon />
            </div>
            <img src={saveIcon} alt={SAVE_ICON_ATL} className={classes.saveSVG} />
        </div>
    );
};

export default PostActionBar;
