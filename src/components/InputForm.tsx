import Icon from './Icon';
import smileSVG from '../assets/smile.svg';
import { st, classes } from '../style/reply.st.css';

const InputForm = () => {
    return (
        <form className={classes.inputForm}>
            <div className={classes.inputArea}>
                <Icon img={smileSVG} className={st(classes.svgImg, classes.smileSVG)} />
                <input id="commentInput" type={'text'} placeholder="Add a comment..." />
            </div>
            <button id="postComment" type="submit">
                Post
            </button>
        </form>
    );
};

export default InputForm;
