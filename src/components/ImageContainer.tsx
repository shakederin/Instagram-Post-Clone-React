import ScrollButton from './ScrollButton';
import { style, classes } from '../style/img.st.css';
import arrow from '../assets/scroll-arrow.svg';
const ImageContainer = () => {
    return (
        <div>
            <div className={classes.mainImg}>
                <ScrollButton svg={arrow} className={classes.arrow} />
                <ScrollButton svg={arrow} className={style(classes.rightArrow, classes.arrow)} />
            </div>
        </div>
    );
};

export default ImageContainer;
