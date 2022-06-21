import ScrollButton from '../scrollButton/ScrollButton';
import { style, classes } from './ImageContainer.st.css';
import arrow from '../../assets/scroll-arrow.svg';

interface IImageContainerProps {
    imgUrls: string[];
}
const ImageContainer = ({ imgUrls }: IImageContainerProps) => (
    <div>
        <div className={classes.mainImg} style={{ backgroundImage: `url(${imgUrls[0]})` }}>
            <ScrollButton className={classes.arrow} svgPath={arrow} />
            <ScrollButton className={style(classes.rightArrow, classes.arrow)} svgPath={arrow} />
        </div>
    </div>
);

export default ImageContainer;
