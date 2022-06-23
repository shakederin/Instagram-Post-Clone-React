import { PLACE_HOLDER } from '../../constants';
import Icon from '../icon/Icon';
import smileSVG from '../../assets/smile.svg';
import { st, classes as generalClasses } from '../../style/general.st.css';
import { classes } from './InputForm.st.css';

interface IInputForm {
    onSubmit: (value: string) => void;
}

const InputForm = ({ onSubmit }: IInputForm) => (
    <form className={classes.root}>
        <div className={classes.inputArea}>
            <Icon className={st(generalClasses.svgImg, classes.smileSVG)} img={smileSVG} />
            <input className={classes.commentInput} type="text" placeholder={PLACE_HOLDER} />
        </div>
        <button className={classes.postComment} type="submit">
            Post
        </button>
    </form>
);
export default InputForm;
