import { Icon } from '../icon/Icon';
import { CommentIcon } from './CommentIcon';
import { SharePostIcon } from './SharePostIcon';
import heart from '../../assets/heart.svg';
import redHeart from '../../assets/red-heart.svg';
import saveIcon from '../../assets/save-icon.svg';
import { SAVE_ICON_ATL } from '../../constants';
import { classes } from './PostActionBar.st.css';
import { classes as generalClasses } from '../../style/general.st.css';
import type { User } from '../../types';

export interface IPostActionBar {
    likePost: (user: User) => void;
}

export const PostActionBar = ({ likePost }: IPostActionBar) => (
    <div className={classes.root}>
        <div>
            <Icon img={heart} className={generalClasses.svgImg} />
            <CommentIcon />
            <SharePostIcon />
        </div>
        <img src={saveIcon} alt={SAVE_ICON_ATL} className={classes.saveSVG} />
    </div>
);
