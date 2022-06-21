import { PLACE_HOLDER } from '../../constants';
import Icon from '../icon/Icon';

interface IInputForm {
    onSubmit: (value: string) => void;
}

const InputForm = ({ onSubmit }: IInputForm) => (
    <form>
        <div>
            <Icon className={''} img={'smileSVG'} />
            <input type="text" placeholder={PLACE_HOLDER} />
        </div>
        <button type="submit">Post</button>
    </form>
);
export default InputForm;
