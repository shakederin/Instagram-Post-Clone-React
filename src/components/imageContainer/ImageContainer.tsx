import ScrollButton from '../scrollButton/ScrollButton';
import arrow from '../../assets/scroll-arrow.svg';
import { st, classes } from './ImageContainer.st.css';

interface IImageContainerProps {
    imgUrls: string[];
}
const ImageContainer = ({ imgUrls }: IImageContainerProps) => (
    <div>
        <div className={classes.mainImg} style={{ backgroundImage: `url(${imgUrls[0]})` }}>
            <ScrollButton className={classes.arrow} svgPath={arrow} />
            <ScrollButton className={st(classes.rightArrow, classes.arrow)} svgPath={arrow} />
        </div>
    </div>
);

export default ImageContainer;
