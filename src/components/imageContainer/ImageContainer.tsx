import arrow from '../../assets/scroll-arrow.svg';
import ScrollButton from '../scrollButton/ScrollButton';
import { st, classes } from './ImageContainer.st.css';

interface IImageContainerProps {
    imgUrls: string[];
}
const ImageContainer = ({ imgUrls }: IImageContainerProps) => (
    <div className={classes.root}>
        <div className={classes.mainImg} style={{ backgroundImage: `url(${imgUrls[0]})` }}>
            <ScrollButton className={st(classes.arrow, { direction: 'left' })} svgPath={arrow} />
            <ScrollButton className={st(classes.arrow, { direction: 'right' })} svgPath={arrow} />
        </div>
    </div>
);

export default ImageContainer;
