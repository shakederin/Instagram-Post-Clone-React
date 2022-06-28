import { PhotoIndexIndicatorAbove5, renderPhotoIndexIndicator } from './helper';
import { st, classes } from './PhotoIndexIndicator.st.css';

interface IPhotoIndexIndicator {
    currentImgUrlIndex: number;
    imgUrls: string[];
}
const PhotoIndexIndicator = ({ currentImgUrlIndex, imgUrls }: IPhotoIndexIndicator) => {
    const normalDot = <div className={classes.dot}>&#8226;</div>;
    const currentDot = <div className={st(classes.dot, classes.currentDot)}>&#8226;</div>;
    const fadeDot = <div className={st(classes.dot, classes.fadeDot)}>&#8226;</div>;

    return imgUrls.length < 6 ? (
        <div className={classes.root}>
            {renderPhotoIndexIndicator(currentImgUrlIndex, imgUrls, normalDot, currentDot)}
        </div>
    ) : (
        <div className={classes.root}>
            {PhotoIndexIndicatorAbove5(currentImgUrlIndex, imgUrls, normalDot, currentDot, fadeDot)}
        </div>
    );
};

export default PhotoIndexIndicator;
