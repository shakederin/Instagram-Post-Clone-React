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
import { SAMPLE_PROFILE_PICTURES } from '../../mockData';

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
                        likePost({ userName: YOU, profilePicture: SAMPLE_PROFILE_PICTURES[1] });
                        setIsLiked(!isLiked);
                    }}
                >
                    <Icon className={generalClasses.svgImg} img={isLiked ? redHeart : heart} />
                </span>
                <CommentIcon />
                <SharePostIcon />
            </div>
            <img src={saveIcon} alt={SAVE_ICON_ATL} className={classes.saveSVG} />
        </div>
    );
};

export default PostActionBar;
