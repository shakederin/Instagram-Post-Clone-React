import Icon from '../icon/Icon';
import heart from '../../assets/heart.svg';
import redHeart from '../../assets/red-heart.svg';
import saveIcon from '../../assets/save-icon.svg';
import { classes } from './PostActionBar.st.css';
import { classes as generalClasses } from '../../style/general.st.css';

interface IPostActionBar {
    likePost: () => void;
}

const PostActionBar = ({ likePost }: IPostActionBar) => (
    <div className={classes.root}>
        <div>
            <Icon img={heart} className={generalClasses.svgImg} />
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

export default PostActionBar;
