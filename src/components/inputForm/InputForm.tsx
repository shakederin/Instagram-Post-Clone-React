import { useRef } from 'react';
import Icon from '../icon/Icon';
import smileSVG from '../../assets/smile.svg';
import { getRandomUser } from '../../utils/getRandomUser';
import { PLACE_HOLDER, POST } from '../../constants';
import { st, classes as generalClasses } from '../../style/general.st.css';
import { classes } from './InputForm.st.css';
import type { Comment, LikeComment, OnSubmit } from '../../types';

interface IInputForm {
    likeComment: LikeComment;
    onSubmit: OnSubmit;
}

const InputForm = ({ likeComment, onSubmit }: IInputForm) => {
    const inputElement = useRef<HTMLInputElement>(null);
    const formElement = useRef<HTMLFormElement>(null);
    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (inputElement.current instanceof HTMLInputElement && inputElement.current.value.trim()) {
            const randomUser = getRandomUser();
            const newComment = {
                user: randomUser,
                content: inputElement.current.value,
                creationDate: Date.now(),
                LikedBy: [],
                likeComment,
                id: Math.random().toString(16).slice(2),
            };
            onSubmit(newComment);
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
