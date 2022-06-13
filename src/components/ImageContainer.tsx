import ScrollButton from './ScrollButton';
import { style, classes } from '../style/img.st.css';
import arrow from '../assets/scroll-arrow.svg';

const ImageContainer = ({ imgUrl }: { imgUrl: string }) => (
    <div>
        <div className={classes.mainImg} style={{ backgroundImage: `url(${imgUrl})` }}>
            <ScrollButton svg={arrow} className={classes.arrow} />
            <ScrollButton svg={arrow} className={style(classes.rightArrow, classes.arrow)} />
        </div>
    </div>
);

export default ImageContainer;
