import Icon from '../icon/Icon';
import smileSVG from '../../assets/smile.svg';
import { PLACE_HOLDER, POST } from '../../constants';
import { classes } from './InputForm.st.css';
import { st, classes as generalClasses } from '../../style/general.st.css';

interface IInputForm {
    onSubmit: (value: string) => void;
}

const InputForm = ({}: IInputForm) => (
    <form className={classes.root}>
        <div className={classes.inputArea}>
            <Icon className={st(generalClasses.svgImg, classes.smileSVG)} img={smileSVG} />
            <input className={classes.commentInput} type="text" placeholder={PLACE_HOLDER} />
        </div>
        <button className={classes.postComment} type="submit">
            {POST}
        </button>
    </form>
);
export default InputForm;
