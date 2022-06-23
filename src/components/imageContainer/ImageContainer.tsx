import arrow from '../../assets/scroll-arrow.svg';
import ScrollButton from '../scrollButton/ScrollButton';
import { st, classes } from './ImageContainer.st.css';

interface IImageContainerProps {
    imgUrls: string[];
}
const ImageContainer = ({ imgUrls }: IImageContainerProps) => (
    <div className={classes.root}>
        <div className={classes.mainImg} style={{ backgroundImage: `url(${imgUrls[0]})` }}>
            <ScrollButton className={classes.arrow} svgPath={arrow} />
            <ScrollButton className={st(classes.rightArrow, classes.arrow)} svgPath={arrow} />
        </div>
    </div>
);

export default ImageContainer;
