import Icon from '../../general/Icon';
import smileSVG from '../../assets/smile.svg';
import { classes } from '../../style/reply.st.css';

const InputForm = () => {
    return (
        <form id="inputForm">
            <div className="inputArea">
                <Icon img={smileSVG} className={classes.svgImg} id={'smileSVG'} />
                <input id="commentInput" type={'text'} placeholder="Add a comment..." />
            </div>
            <button id="postComment" type="submit">
                Post
            </button>
        </form>
    );
};

export default InputForm;
