import Icon from './Icon';
import smileSVG from '../assets/smile.svg';
import { st, classes } from '../style/reply.st.css';
import { PLACE_HOLDER } from '../constants';
const InputForm = () => {
    return (
        <form className={classes.inputForm}>
            <div className={classes.inputArea}>
                <Icon img={smileSVG} className={st(classes.svgImg, classes.smileSVG)} />
                <input className={classes.commentInput} type="text" placeholder={PLACE_HOLDER} />
            </div>
            <button className={classes.postComment} type="submit">
                Post
            </button>
        </form>
    );
};

export default InputForm;
