import Icon from '../icon/Icon';
import { classes as generalClasses } from '../../style/general.st.css';
import { classes } from './PostActionBar.st.css';
import saveIcon from '../../assets/save-icon.svg';
import heart from '../../assets/heart.svg';
import redHeart from '../../assets/red-heart.svg';
import { memo, useState } from 'react';
import type { User } from '../../types';

interface IPostActionBar {
    likePost: (user: User) => void;
}

const PostActionBar = ({ likePost }: IPostActionBar) => {
    const [isLiked, setIsLiked] = useState<boolean>(false);
    return (
        <div className={classes.icons}>
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
                <svg
                    className={generalClasses.svgImg}
                    aria-label="Comment"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                >
                    <path
                        d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                        fill="none"
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth="2"
                    ></path>
                </svg>
                <svg
                    className={generalClasses.svgImg}
                    aria-label="Share Post"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                >
                    <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="22"
                        x2="9.218"
                        y1="3"
                        y2="10.083"
                    ></line>
                    <polygon
                        fill="none"
                        points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth="2"
                    />
                </svg>
            </div>
            <img src={saveIcon} alt="save icon" className={classes.saveSVG} />
        </div>
    );
};

export default memo(PostActionBar);
