import { useRef } from 'react';
import Icon from '../icon/Icon';
import smileSVG from '../../assets/smile.svg';
import { PLACE_HOLDER, POST } from '../../constants';
import { st, classes as generalClasses } from '../../style/general.st.css';
import { classes } from './InputForm.st.css';
import type { OnSubmit } from '../../types';

interface IInputForm {
    onSubmit: OnSubmit;
}

const InputForm = ({ onSubmit }: IInputForm) => {
    const inputElement = useRef<HTMLInputElement>(null);
    const formElement = useRef<HTMLFormElement>(null);
    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (inputElement.current instanceof HTMLInputElement && inputElement.current.value.trim()) {
            onSubmit(inputElement.current.value);
        }
        formElement.current?.reset();
    };
    return (
        <form ref={formElement} onSubmit={submitForm} className={classes.root}>
            <div className={classes.inputArea}>
                <Icon className={st(generalClasses.svgImg, classes.smileSVG)} img={smileSVG} />
                <input
                    ref={inputElement}
                    className={classes.commentInput}
                    type="text"
                    placeholder={PLACE_HOLDER}
                />
            </div>
            <button className={classes.postComment} type="submit">
                {POST}
            </button>
        </form>
    );
};
export default InputForm;
